'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'comments',
      [
        {
          questionId: 1,
          body:
            'Spicy jalapeno bacon ipsum dolor amet cow short loin ribeye porchetta filet mignon shank.',
          authorId: 1,
          upVotes: 5,
          isSolution: false,
          createdAt: new Date('December 10, 2020 12:18:30'),
          updatedAt: new Date(),
        },
        {
          questionId: 1,
          body:
            'Spicy jalapeno bacon ipsum dolor amet cow short loin ribeye porchetta filet mignon shank.',
          authorId: 1,
          upVotes: 7,
          isSolution: false,
          createdAt: new Date('December 10, 2020 12:14:30'),
          updatedAt: new Date(),
        },
        {
          questionId: 1,
          body:
            'Spicy jalapeno bacon ipsum dolor amet cow short loin ribeye porchetta filet mignon shank.',
          authorId: 1,
          upVotes: 10,
          isSolution: true,
          createdAt: new Date('December 10, 2020 12:13:30'),
          updatedAt: new Date(),
        },
        {
          questionId: 2,
          body:
            'Spicy jalapeno bacon ipsum dolor amet cow short loin ribeye porchetta filet mignon shank.',
          authorId: 1,
          upVotes: 8,
          isSolution: false,
          createdAt: new Date('December 10, 2020 12:12:30'),
          updatedAt: new Date(),
        },
        {
          questionId: 2,
          body:
            'Spicy jalapeno bacon ipsum dolor amet cow short loin ribeye porchetta filet mignon shank.',
          authorId: 1,
          upVotes: 4,
          isSolution: false,
          createdAt: new Date('December 10, 2020 12:10:30'),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comments', null, {});
  },
};
