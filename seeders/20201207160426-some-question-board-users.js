"use strict";
// userId: DataTypes.INTEGER,
// questionBoardId: DataTypes.INTEGER,
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "questionBoardUsers",
      [
        {
          userId: "1",
          questionBoardId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "2",
          questionBoardId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "3",
          questionBoardId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "4",
          questionBoardId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "5",
          questionBoardId: "5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "3",
          questionBoardId: "6",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("questionBoardUsers", null, {});
  },
};
