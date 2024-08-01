const hashService = require("../services/hash-service");
const jwtService = require("../services/jwt-service");
const userService = require("../services/user-service");
const { createError } = require("../utils/create-error");

const authController = {};

authController.register = async (req, res, next) => {
  try {
    const data = req.input;
    // check if a user exists
    const existUser = await userService.findUserByEmail(data.email);

    if (existUser) {
      createError("email already registered", 400, "email");
    }

    // hash password

    data.password = await hashService.hash(data.password);
    // insert data into User table
    await userService.createUser(data);

    res.status(201).json({ message: data });
  } catch (error) {
    next(error);
  }
};

authController.login = async (req, res, next) => {
  try {
    const data = req.input;

    // find exist user
    const existUser = await userService.findUserByEmail(data.email);
    // if no user, return error
    if (!existUser) {
      createError("Invalid credentials", 400);
    }

    // if user exists, is password matched?

    const isMatch = await hashService.compare(
      data.password,
      existUser.password
    );

    // if not, return error
    if (!isMatch) {
      createError("invalid credentials", 400);
    }

    // if everything is okay, create token

    const accessToken = jwtService.sign({ id: existUser.id });

    res.status(200).json({ accessToken });
  } catch (error) {
    next(error);
  }
};

authController.getUserInfo = async (req, res, next) => {
  try {
    const data = req.user;
    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};

module.exports = authController;
