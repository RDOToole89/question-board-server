const cors = require('cors');
const express = require('express');
const authRouter = require('./routers/auth');
const boardsRouter = require('./routers/questionBoards');
const questionsRouter = require('./routers/questions');
const Comment = require('./models').comment;
const Question = require('./models').question;
const QuestionBoard = require('./models').questionBoard;
const User = require('./models').user;
const Tag = require('./models').tag;

const app = express();
const PORT = process.env.PORT || 4000;

// MiddleWares
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

//SOCKETS IO TEST

// Opens socket connection
const http = require('http');
const server = http.createServer(app);
const socket = require('socket.io');
const io = socket(server, {
  cors: {

    origin: CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST"],

    credentials: true,
  },
});

io.on('connection', (socket) => {
  console.log('client connected');

  // emits an event holding the socket id
  socket.emit('socketId', socket.id);

  // listens for an event "comment" adds the comment to the db and sends "EMITS" back the comment
  // socket.error
  socket.on('comment', async (comment) => {
    const { questionId } = comment;

    // console.log('WHATS IN COMMENT', comment);
    const newComment = await Comment.create({ ...comment });
    // console.log('NEWLY CREATED COMMENT', newComment.dataValues);

    const questionToUpdate = await Question.findOne({
      where: { id: questionId },
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'firstName', 'lastName', 'classNo'],
        },
        { model: Comment, include: [{ model: User, as: 'author' }] },
        { model: Tag, attributes: ['id', 'tagname', 'createdAt'] },
      ],
    });

    socket.on('disconnect', () => {
      console.log('client disconnected');
    });

    io.emit('comment', questionToUpdate);
  });
  socket.on('resolveQuestion', async (questionId) => {
    //const question_Id = questionId.questionId;

    const questionToUpdate = await Question.findByPk(questionId);
    const updatedQuestion = await questionToUpdate.update({
      ...questionToUpdate,
      resolved: true,
    });

    io.emit('questionUpdated', updatedQuestion);
  });
  socket.on('updateSolverId', async ({ questionId, solverId }) => {
    //const question_Id = questionId.questionId;

    const questionToUpdate = await Question.findByPk(questionId);
    const updatedQuestion = await questionToUpdate.update({
      ...questionToUpdate,
      solverId,
    });

    io.emit('questionUpdated', updatedQuestion);
  });
  socket.on('deleteQuestionById', async (questionId) => {
    const questionToDelete = await Question.findByPk(questionId);

    const updatedQuestion = await questionToDelete.destroy();

    io.emit('questionUpdated', questionToDelete);
  });
});

app.get('/', (req, res, next) => {
  res.json('Hello World');
});

// Routers
app.use('/', authRouter);
app.use('/boards', boardsRouter);
app.use('/questions', questionsRouter);

server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
