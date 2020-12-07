const cors = require("cors");
const express = require("express");
const { cloudinary } = require("./config/cloudinary");
const authRouter = require("./routers/auth");
const boardsRouter = require("./routers/questionBoards");
const app = express();
const PORT = process.env.PORT || 4000;

// MiddleWares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.get("/", (req, res, next) => {
  res.json("Hello World");
});

// Routers
app.use("/", authRouter);
app.use("/boards", boardsRouter);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
