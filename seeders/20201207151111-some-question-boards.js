"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "questionBoards",
      [
        {
          name: "Class 46",
          description: "A question board for class 46",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "JavaScript",
          description: "A question board about JavaScript issues",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Frontend",
          description: "A question board for frontend issues",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Backend",
          description: "A question board for backend issues",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Class 47",
          description: "A question board for class 47",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Class 48",
          description: "A question board for class 48",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("questionBoards", null, {});
  },
};
