const carService = require("../services/car-service");

const carController = {};

carController.getAllCars = async (req, res, next) => {
  try {
    const data = await carService.findAllCars();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = carController;
