const express = require("express");

const authController = require("../controllers/auth-controller");
const validator = require("../middlewares/validator");

const authRouter = express.Router();

authRouter.post("/register", validator.register, authController.register);

authRouter.post("/login", validator.login, authController.login);

module.exports = authRouter;
