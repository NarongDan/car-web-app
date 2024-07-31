const { createError } = require("../utils/create-error");

const carValidator = (req, res, next) => {
  const { licensePlate, brand, model, color, fuelType } = req.body;

  if (!licensePlate) {
    createError("License plate is required", 400, "licensePlate");
  }

  if (!brand) {
    createError("Brand is required", 400, "brand");
  }

  if (!model) {
    createError("Model is required", 400, "model");
  }

  if (!color) {
    createError("Color is required", 400, "color");
  }

  if (!fuelType) {
    createError("Fuel type is required", 400, "fuelType");
  }

  next();
};

module.exports = carValidator;
