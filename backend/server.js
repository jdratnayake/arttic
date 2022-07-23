//import modules
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

//routers
const authRouter = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());

//define routes
app.use("/api/v1/auth", authRouter);

// set the port
const port = process.env.PORT || 5000;

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
