//import modules
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

//middlewares
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

//routers
const authRouter = require("./routes/authRoutes");
const settingsRouter = require("./routes/settingsRoutes");
const userRouter = require("./routes/userRoutes");
const feedRouter = require("./routes/feedRouters");

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());

//define routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/settings", settingsRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/feed", feedRouter);

// serve static files
app.use(express.static("assets"));

app.use(notFound);
app.use(errorHandler);

// set the port
const port = process.env.PORT || 5000;

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
