const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const QuestionBoard = require("../models/").questionBoard;
const Question = require("../models/").question;
const QuestionTag = require("../models/").questionTag;
const User = require("../models/").user;

const Tag = require("../models/").tag;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const boards = await QuestionBoard.findAll();

    if (!boards) {
      return res.status(400).send({ message: "Something went wrong, sorry" });
    }

    res.status(200).json(boards);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  const { name, description } = req.body;

  try {
    const newQuestionBoard = await QuestionBoard.create({ name, description });

    if (!newQuestionBoard) {
      return res.status(400).send({ message: "Somethings went wrong, question board not created" });
    }

    res.status(200).json(newQuestionBoard);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const board = await QuestionBoard.findOne({
      where: { id },
      include: [
        {
          model: Question,
          include: [{ model: Tag }, { model: User, as: "author" }],
        },
      ],
    });

    console.log(board);

    if (!board) {
      return res.status(400).send({ message: "Something went wrong, sorry" });
    }

    res.json(board);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
