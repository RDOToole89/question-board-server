'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  comment.init({
    questionId: DataTypes.INTEGER,
    body: DataTypes.TEXT,
    authorId: DataTypes.INTEGER,
    upVotes: DataTypes.INTEGER,
    isSolution: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'comment',
  });
  return comment;
};