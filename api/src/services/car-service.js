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

carService.updateCar = (id, data) => {
  return prisma.car.update({
    data,
    where: { id },
  });
};

carService.deleteCar = (id) => {
  return prisma.car.delete({ where: { id } });
};

carService.findCarByLicensePlate = (licensePlate) => {
  return prisma.car.findUnique({
    where: {
      licensePlate,
    },
  });
};
module.exports = carService;
