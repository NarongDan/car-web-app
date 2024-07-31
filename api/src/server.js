const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const errorMiddleware = require("./middlewares/error");
const notFoundMiddleware = require("./middlewares/not-found");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 8000;

app.listen(port, console.log("This server is running on port:", port));
