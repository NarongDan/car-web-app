const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8000;

app.listen(port, console.log("This server is running on port:", port));
