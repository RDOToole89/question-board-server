"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      question.belongsTo(models.questionBoard);
      question.belongsTo(models.user, { foreignKey: "authorId", as: "author" });
      question.belongsTo(models.user, { foreignKey: "solverId", as: "solver" });
    }
  }
  question.init(
    {
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
      authorId: DataTypes.INTEGER,
      questionBoardId: DataTypes.INTEGER,
      upVotes: DataTypes.INTEGER,
      resolved: DataTypes.BOOLEAN,
      solverId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "question",
    }
  );
  return question;
};
