const { Router } = require('express');
const authMiddleware = require('../auth/middleware');
const User = require('../models').user;
const Question = require('../models').question;
const Comment = require('../models').comment;
const Tag = require('../models').tag;

const router = new Router();

router.get('/', async (req, res, next) => {
	try {
		const allQuestions = await Question.findAll();
		res.send(allQuestions);
	} catch (error) {
		next(e);
	}
});
router.get('/unresolved', async (req, res, next) => {
	try {
		const allQuestions = await Question.findAll({
			where: { resolved: false },
			include: [
				{
					model: User,
					as: 'author',
					attributes: [ 'id', 'firstName', 'lastName', 'classNo' ]
				},
				{
					model: User,
					as: 'solver',
					attributes: [ 'id', 'firstName', 'lastName', 'classNo' ]
				}
			]
		});
		res.send(allQuestions);
	} catch (error) {
		next(e);
	}
});
router.get('/queue', async (req, res, next) => {
	try {
		const allQuestions = await Question.findAll({
			where: { resolved: false, solverId: null },
			include: {
				model: User,
				as: 'author',
				attributes: [ 'id', 'firstName', 'lastName', 'classNo' ]
			}
		});
		res.send(allQuestions);
	} catch (error) {
		next(error);
	}
});

//  Route to find a question by id with comments
router.get('/:id', async (req, res, next) => {
	const { id } = req.params;

	try {
		const question = await Question.findOne({
			where: { id },
			include: [
				{
					model: User,
					as: 'author',
					attributes: [ 'id', 'firstName', 'lastName', 'classNo' ]
				},
				{ model: Comment },
				{ model: Tag, attributes: [ 'id', 'tagname', 'createdAt' ] }
			]
		});

		if (!question) {
			res.status(400).send({ message: 'Something went wrong, question not found' });
		}

		res.status(200).json(question);
	} catch (e) {
		next(e);
	}
});

// Route icrements question upvotes
router.put('/upvote/:id', async (req, res, next) => {
	const { id } = req.params;

	try {
		const questionToUpdate = await Question.findByPk(id);
		if (questionToUpdate) {
			try {
				const updatedQuestion = await questionToUpdate.update({
					...questionToUpdate,
					upVotes: (questionToUpdate.upVotes += 1)
				});

				res.json(updatedQuestion);
			} catch (e) {
				next(e);
			}
		}
	} catch (e) {
		next(e);
	}
});
router.put('/:id', authMiddleware, async (req, res, next) => {
	const { id } = req.params;
	const { key, newValue } = req.body;

	try {
		const questionToUpdate = await Question.findByPk(id);
		if (questionToUpdate) {
			try {
				const updatedQuestion = await questionToUpdate.update({
					...questionToUpdate,
					[key]: newValue
				});

				res.json(updatedQuestion);
			} catch (e) {
				next(e);
			}
		}
	} catch (e) {
		next(e);
	}
});

module.exports = router;
