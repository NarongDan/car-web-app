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

carController.addNewCar = async (req, res, next) => {
  try {
    const data = {
      licensePlate: req.body.licensePlate,
      brand: req.body.brand,
      model: req.body.model,
      color: req.body.color,
      fuelType: req.body.fuelType,
      insurance: req.body.insurance || null,
      notes: req.body.notes || null,
    };

    const newCar = await carService.addNewCar(data);

    res.status(201).json({ message: "car added", newCar });
  } catch (error) {
    next(error);
  }
};

carController.deleteCar = async (req, res, next) => {
  try {
    console.log(req.params);
    // make sure it's Number
    const id = Number(req.params.carId);
    await carService.deleteCar(id);

    res.status(200).json({ message: "car deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = carController;
