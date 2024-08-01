const express = require("express");

const authController = require("../controllers/auth-controller");
const validator = require("../middlewares/validator");
const authenticate = require("../middlewares/authenticate");

const authRouter = express.Router();

authRouter.post("/register", validator.register, authController.register);

authRouter.post("/login", validator.login, authController.login);

authRouter.get("/info", authenticate, authController.getUserInfo);

module.exports = authRouter;
