const hashService = require("../services/hash-service");
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

module.exports = authController;
