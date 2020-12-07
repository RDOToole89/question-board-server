"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          questionId: 1,
          body:
            "Spicy jalapeno bacon ipsum dolor amet cow short loin ribeye porchetta filet mignon shank.",
          authorId: 1,
          upVotes: 5,
          isSolution: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionId: 1,
          body:
            "Spicy jalapeno bacon ipsum dolor amet cow short loin ribeye porchetta filet mignon shank.",
          authorId: 1,
          upVotes: 7,
          isSolution: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionId: 1,
          body:
            "Spicy jalapeno bacon ipsum dolor amet cow short loin ribeye porchetta filet mignon shank.",
          authorId: 1,
          upVotes: 10,
          isSolution: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionId: 2,
          body:
            "Spicy jalapeno bacon ipsum dolor amet cow short loin ribeye porchetta filet mignon shank.",
          authorId: 1,
          upVotes: 8,
          isSolution: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionId: 2,
          body:
            "Spicy jalapeno bacon ipsum dolor amet cow short loin ribeye porchetta filet mignon shank.",
          authorId: 1,
          upVotes: 4,
          isSolution: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("comments", null, {});
  },
};
