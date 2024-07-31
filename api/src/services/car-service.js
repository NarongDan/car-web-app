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

carService.deleteCar = (id) => {
  return prisma.car.delete({ where: { id } });
};

module.exports = carService;
