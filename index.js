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

const http = require('http');
const server = http.createServer(app);
const socket = require('socket.io');
const io = socket(server, {
	cors: {
		origin: 'http://localhost:3000',
		methods: [ 'GET', 'POST' ],
		credentials: true
	}
});

io.on('connection', (socket) => {
	socket.emit('your id', socket.id);
	socket.on('send message', (body) => {
		io.emit('message', body);
	});

	socket.on('comment', async (body) => {
		io.emit('comment', body);
		console.log('SOCKET.IO FRONTEND BODY', body);

		const newComment = await Comment.create({ ...body });
		console.log(newComment.dataValues);
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
