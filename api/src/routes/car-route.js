const express = require("express");

const carController = require("../controllers/car-controller");
const carValidator = require("../validators/car-validator");
const carRouter = express.Router();

carRouter.get("/", carController.getAllCars);

carRouter.post("/", carValidator, carController.addNewCar);

carRouter.delete("/:carId", carController.deleteCar);

module.exports = carRouter;
