const carService = require("../services/car-service");
const { createError } = require("../utils/create-error");

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

    //check license plate
    const existCar = await carService.findCarByLicensePlate(data.licensePlate);

    if (existCar) {
      createError("License plate already exists", 400, "licensePlate");
    }

    //add new car

    const newCar = await carService.addNewCar(data);

    res.status(201).json({ message: "car added", newCar });
  } catch (error) {
    next(error);
  }
};

carController.updateCar = async (req, res, next) => {
  try {
    const id = Number(req.params.carId);
    const data = {
      licensePlate: req.body.licensePlate,
      brand: req.body.brand,
      model: req.body.model,
      color: req.body.color,
      fuelType: req.body.fuelType,
      status: req.body.status,
      insurance: req.body.insurance || null,
      notes: req.body.notes || null,
    };

    //check license plate with id
    const existCar = await carService.findCarByLicensePlate(data.licensePlate);

    if (existCar && existCar.id !== id) {
      createError(
        "License plate already exists in other cars",
        400,
        "licensePlate"
      );
    }

    // update car
    const updatedCar = await carService.updateCar(id, data);

    res.status(200).json({ message: "car updated", updatedCar });
  } catch (error) {
    next(error);
  }
};

carController.deleteCar = async (req, res, next) => {
  try {
    const id = Number(req.params.carId);

    //delete
    await carService.deleteCar(id);

    res.status(200).json({ message: "car deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = carController;
