//import modules
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const http = require("http");
const { Server } = require("socket.io");

//middlewares
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

//routers
const authRouter = require("./routes/authRoutes");
const settingsRouter = require("./routes/settingsRoutes");
const userRouter = require("./routes/userRoutes");
const advertismentRouter = require("./routes/advertismentRoutes");
const feedRouter = require("./routes/feedRouters");
const test = require("./routes/testRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());

//define routes
app.use("/api/v1/test", test);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/settings", settingsRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/advertisment", advertismentRouter);
app.use("/api/v1/feed", feedRouter);

// serve static files
app.use(express.static("assets"));

app.use(notFound);
app.use(errorHandler);

// set the port
const port = process.env.PORT || 5000;

// Chat - START
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
    console.log(data.message);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});
// Chart - END

// listen for requests
server.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
