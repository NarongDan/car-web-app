const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const errorMiddleware = require("./middlewares/error");
const notFoundMiddleware = require("./middlewares/not-found");
const authRouter = require("./routes/auth-route");
const carRouter = require("./routes/car-route");
//
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// routes

app.use("/auth", authRouter);
app.use("/car", carRouter);
//  Not Found and Error Middlewares
app.use(notFoundMiddleware);
app.use(errorMiddleware);

//Server
const port = process.env.PORT || 8000;

app.listen(port, console.log("This server is running on port:", port));
