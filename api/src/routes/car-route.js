const express = require("express");
const carRouter = express.Router();

const carController = require("../controllers/car-controller");
const carValidator = require("../validators/car-validator");

carRouter.get("/", carController.getAllCars);

carRouter.post("/", carValidator, carController.addNewCar);

carRouter.patch("/:carId", carController.updateCar);

carRouter.delete("/:carId", carValidator, carController.deleteCar);

module.exports = carRouter;
