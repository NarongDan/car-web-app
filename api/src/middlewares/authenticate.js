const jwtService = require("../services/jwt-service");
const userService = require("../services/user-service");
const { createError } = require("../utils/create-error");

const authenticate = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;

    // check for token

    if (!authorization || !authorization.startsWith("Bearer ")) {
      createError("unauthenticated", 401);
    }

    const accessToken = authorization.split(" ")[1];

    const payload = jwtService.verify(accessToken);

    const user = await userService.findUserById(payload.id);

    // if no user in database
    if (!user) {
      createError("User was not found", 400);
    }

    delete user.password;

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authenticate;
