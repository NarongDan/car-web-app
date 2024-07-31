const prisma = require("../model/prisma");
const carService = {};

carService.findAllCars = () => {
  return prisma.car.findMany({
    orderBy: {
      id: "desc",
    },
  });
};

module.exports = carService;
