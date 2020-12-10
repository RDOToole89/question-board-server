const cors = require('cors');
const express = require('express');
const authRouter = require('./routers/auth');
const boardsRouter = require('./routers/questionBoards');
const questionsRouter = require('./routers/questions');
const Comment = require('./models').comment;

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
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

io.on('connection', (socket) => {
  // emits an event holding the socket id
  socket.emit('socketId', socket.id);

  // listens for an event "comment" adds the comment to the db and sends "EMITS" back the comment
  socket.on('comment', async (commentBody) => {
    io.emit('comment', commentBody);
    console.log('SOCKET.IO FRONTEND BODY', commentBody);

    const newComment = await Comment.create({ ...commentBody });
    console.log('NEWLY CREATED COMMENT', newComment.dataValues);
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
