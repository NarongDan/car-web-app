const express = require("express");
const authenticate = require("../middlewares/authenticate");
const carController = require("../controllers/car-controller");
const carRouter = express.Router();

carRouter.get("/", authenticate, carController.getAllCars);

module.exports = carRouter;
