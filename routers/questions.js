const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const user = require("../models/user");
const User = require("../models").user;
const Question = require("../models").question;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const allQuestions = await Question.findAll();
    res.send(allQuestions);
  } catch (error) {
    next(e);
  }
});
router.get("/unresolved", async (req, res, next) => {
  try {
    const allQuestions = await Question.findAll({ where: { resolved: false } });
    res.send(allQuestions);
  } catch (error) {
    next(e);
  }
});
router.get("/queue", async (req, res, next) => {
  try {
    const allQuestions = await Question.findAll({
      where: { resolved: false, solverId: null },
      include: {
        model: User,
        as: "author",
        attributes: ["id", "firstName", "lastName", "classNo"],
      },
    });
    res.send(allQuestions);
  } catch (error) {
    next(error);
  }
});

// Route icrements question upvotes
router.put("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const questionToUpdate = await Question.findByPk(id);
    if (questionToUpdate) {
      try {
        const updatedQuestion = await questionToUpdate.update({
          ...questionToUpdate,
          upVotes: (questionToUpdate.upVotes += 1),
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
