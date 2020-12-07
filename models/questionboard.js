"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class questionBoard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      questionBoard.belongsToMany(models.user, {
        // causing error message -- was hasMany
        through: "questionBoardUsers",
        foreignKey: "questionBoardId",
      });
    }
  }
  questionBoard.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "questionBoard",
    }
  );
  return questionBoard;
};
