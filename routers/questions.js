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
module.exports = router;
