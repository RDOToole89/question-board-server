'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('comments', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			questionId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'questions',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL'
			},
			body: {
				type: Sequelize.TEXT
			},
			authorId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'users',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL'
			},
			upVotes: {
				type: Sequelize.INTEGER
			},
			isSolution: {
				type: Sequelize.BOOLEAN
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('comments');
	}
};
