// const io = require('../config/socketIo');
// const Comment = require('./models').comment;
// const Question = require('./models').question;
// const User = require('./models').user;
// const Tag = require('./models').tag;
// //SOCKETS IO TEST

// // Opens socket connection
// io.on('connection', (socket) => {
//   console.log('client connected');
//   // emits an event holding the socket id
//   socket.emit('socketId', socket.id);

//   // listens for an event "comment" adds the comment to the db and sends "EMITS" back the comment
//   // socket.error
//   socket.on('comment', async (comment) => {
//     const { questionId } = comment;

//     // console.log('WHATS IN COMMENT', comment);

//     const newComment = await Comment.create({ ...comment });
//     // console.log('NEWLY CREATED COMMENT', newComment.dataValues);

//     const questionToUpdate = await Question.findOne({
//       where: { id: questionId },
//       include: [
//         {
//           model: User,
//           as: 'author',
//           attributes: ['id', 'firstName', 'lastName', 'classNo'],
//         },
//         { model: Comment, include: [{ model: User, as: 'author' }] },
//         { model: Tag, attributes: ['id', 'tagname', 'createdAt'] },
//       ],
//     });

//     io.emit('comment', questionToUpdate);
//   });
// });

// io.on('disconnect', (socket) => {
//   socket.on('disconnect', () => {
//     console.log('Client disconnected');
//   });
// });
