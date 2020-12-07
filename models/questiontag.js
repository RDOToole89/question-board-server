"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class questionTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      questionTag.belongsTo(models.question);
      questionTag.belongsTo(models.tag);
    }
  }
  questionTag.init(
    {
      tagId: DataTypes.INTEGER,
      questionId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "questionTag",
    }
  );
  return questionTag;
};
