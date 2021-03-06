'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class comment extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			comment.belongsTo(models.question);
			comment.belongsTo(models.user, { foreignKey: 'authorId', as: 'author' });
		}
	}
	comment.init(
		{
			questionId: DataTypes.INTEGER,
			body: DataTypes.TEXT,
			authorId: DataTypes.INTEGER,
			upVotes: DataTypes.INTEGER,
			isSolution: DataTypes.BOOLEAN
		},
		{
			sequelize,
			modelName: 'comment'
		}
	);
	return comment;
};
