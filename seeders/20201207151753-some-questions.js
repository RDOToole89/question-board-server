'use strict';
//
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'questions',
      [
        {
          title: 'I need help with sequelize',
          body:
            'Spicy jalapeno bacon ipsum dolor amet cow short loin ribeye porchetta filet mignon shank. Salami burgdoggen corned beef tongue prosciutto shankle turducken landjaeger short loin. Strip steak spare ribs short loin, sirloin turducken tongue fatback porchetta. Burgdoggen pork belly meatloaf spare ribs, biltong short ribs picanha pig. Chuck turducken ball tip, sirloin hamburger jerky venison chicken.',
          authorId: 1,
          questionBoardId: 1,
          screenshotURL:
            'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          upVotes: 10,
          resolved: false,
          solverId: null,
          createdAt: new Date('December 10, 2020 12:18:30'),
          updatedAt: new Date(),
        },
        {
          title: 'JsonWebToken authentication error',
          body:
            'Spicy jalapeno bacon ipsum dolor amet cow short loin ribeye porchetta filet mignon shank. Salami burgdoggen corned beef tongue prosciutto shankle turducken landjaeger short loin. Strip steak spare ribs short loin, sirloin turducken tongue fatback porchetta. Burgdoggen pork belly meatloaf spare ribs, biltong short ribs picanha pig. Chuck turducken ball tip, sirloin hamburger jerky venison chicken.',
          authorId: 2,
          questionBoardId: 1,
          screenshotURL:
            'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          upVotes: 30,
          resolved: true,
          solverId: 3,
          createdAt: new Date('December 10, 2020 12:17:30'),
          updatedAt: new Date(),
        },
        {
          title: 'Need help configuring Cloudinary',
          body:
            'Spicy jalapeno bacon ipsum dolor amet cow short loin ribeye porchetta filet mignon shank. Salami burgdoggen corned beef tongue prosciutto shankle turducken landjaeger short loin. Strip steak spare ribs short loin, sirloin turducken tongue fatback porchetta. Burgdoggen pork belly meatloaf spare ribs, biltong short ribs picanha pig. Chuck turducken ball tip, sirloin hamburger jerky venison chicken.',
          authorId: 1,
          questionBoardId: 1,
          screenshotURL:
            'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          upVotes: 7,
          resolved: true,
          solverId: 3,
          createdAt: new Date('December 10, 2020 12:14:30'),
          updatedAt: new Date(),
        },
        {
          title: 'TypeScript errors all over the place HELP!!!!!',
          body:
            'Spicy jalapeno bacon ipsum dolor amet cow short loin ribeye porchetta filet mignon shank. Salami burgdoggen corned beef tongue prosciutto shankle turducken landjaeger short loin. Strip steak spare ribs short loin, sirloin turducken tongue fatback porchetta. Burgdoggen pork belly meatloaf spare ribs, biltong short ribs picanha pig. Chuck turducken ball tip, sirloin hamburger jerky venison chicken.',
          authorId: 2,
          questionBoardId: 1,
          screenshotURL:
            'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          upVotes: 11,
          resolved: false,
          solverId: null,
          createdAt: new Date('December 10, 2020 12:10:30'),
          updatedAt: new Date(),
        },
        {
          title: 'Conflicting branches on github what to do?',
          body:
            'Spicy jalapeno bacon ipsum dolor amet cow short loin ribeye porchetta filet mignon shank. Salami burgdoggen corned beef tongue prosciutto shankle turducken landjaeger short loin. Strip steak spare ribs short loin, sirloin turducken tongue fatback porchetta. Burgdoggen pork belly meatloaf spare ribs, biltong short ribs picanha pig. Chuck turducken ball tip, sirloin hamburger jerky venison chicken.',
          authorId: 1,
          questionBoardId: 1,
          screenshotURL:
            'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          upVotes: 8,
          resolved: false,
          solverId: null,
          createdAt: new Date('December 10, 2020 12:09:30'),
          updatedAt: new Date(),
        },
        {
          title: 'Need some help with array methods!',
          body:
            'Spicy jalapeno bacon ipsum dolor amet cow short loin ribeye porchetta filet mignon shank. Salami burgdoggen corned beef tongue prosciutto shankle turducken landjaeger short loin. Strip steak spare ribs short loin, sirloin turducken tongue fatback porchetta. Burgdoggen pork belly meatloaf spare ribs, biltong short ribs picanha pig. Chuck turducken ball tip, sirloin hamburger jerky venison chicken.',
          authorId: 1,
          questionBoardId: 1,
          screenshotURL:
            'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          upVotes: 8,
          resolved: false,
          solverId: null,
          createdAt: new Date('December 10, 2020 12:07:30'),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('questions', null, {});
  },
};
