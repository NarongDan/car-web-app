const express = require("express");

const carController = require("../controllers/car-controller");
const validator = require("../middlewares/validator");
const carRouter = express.Router();

carRouter.get("/", carController.getAllCars);

carRouter.post("/", validator.carValidate, carController.addNewCar);

carRouter.patch("/:carId", validator.carValidate, carController.updateCar);

carRouter.delete("/:carId", carController.deleteCar);

module.exports = carRouter;
