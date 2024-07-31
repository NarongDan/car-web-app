const prisma = require("../model/prisma");
const carService = {};

carService.findAllCars = () => {
  return prisma.car.findMany({
    orderBy: {
      id: "desc",
    },
  });
};

carService.addNewCar = (data) => {
  return prisma.car.create({ data });
};

module.exports = carService;
