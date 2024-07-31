const express = require("express");
const authenticate = require("../middlewares/authenticate");
const carController = require("../controllers/car-controller");
const carValidator = require("../validators/car-validator");
const carRouter = express.Router();

carRouter.get("/", authenticate, carController.getAllCars);

carRouter.post("/", authenticate, carValidator, carController.addNewCar);

module.exports = carRouter;
