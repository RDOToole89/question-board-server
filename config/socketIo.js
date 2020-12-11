const socket = require("socket.io");
const { CLIENT_URL } = require("./constants");
const io = socket(server, {
  cors: {
    origin: CLIENT_URL,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

module.exports = io;
