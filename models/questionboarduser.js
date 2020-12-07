'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class questionBoardUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  questionBoardUser.init({
    userId: DataTypes.INTEGER,
    questionBoardId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'questionBoardUser',
  });
  return questionBoardUser;
};