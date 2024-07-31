const prisma = require("../model/prisma");

const userService = {};

userService.findUserByEmail = (email) =>
  prisma.user.findFirst({
    where: {
      email,
    },
  });

userService.createUser = (data) => prisma.user.create({ data });

module.exports = userService;
