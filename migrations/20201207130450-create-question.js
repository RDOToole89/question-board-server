'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('questions', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			title: {
				type: Sequelize.STRING
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
			questionBoardId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'questionBoards',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL'
			},
			upVotes: {
				type: Sequelize.INTEGER
			},
			resolved: {
				type: Sequelize.BOOLEAN
			},
			solverId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'users',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL'
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
		await queryInterface.dropTable('questions');
	}
};
