"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.question, { foreignKey: "authorId", as: "author" });
      user.hasMany(models.question, { foreignKey: "solverId", as: "solver" });
      user.belongsToMany(models.questionBoard, {
        // causing error message --- was hasMany
        through: "questionBoardUsers",
        foreignKey: "userId",
      });
    }
  }
  user.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      classNo: DataTypes.INTEGER,
      isTeacher: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
