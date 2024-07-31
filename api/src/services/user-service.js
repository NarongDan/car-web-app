const prisma = require("../model/prisma");

const userService = {};

userService.findUserByEmail = (email) =>
  prisma.user.findFirst({
    where: {
      email,
    },
  });

userService.createUser = (data) => prisma.user.create({ data });

userService.findUserById = (id) =>
  prisma.user.findUnique({
    where: {
      id,
    },
  });

module.exports = userService;
