const Joi = require("joi");

carValidator = {};

carValidator.carSchema = Joi.object({
  licensePlate: Joi.string()
    .pattern(/^[A-Za-z0-9]{1,10}$/)
    .required()
    .messages({
      "string.pattern.base":
        "License plate must be characters and number and up to 10 characters",
      "any.required": "License plate is required",
      "string.empty": "License plate cannot be empty",
    }),
  brand: Joi.string().required().messages({
    "any.required": "Brand is required",

    "string.empty": "Brand cannot be empty",
  }),
  model: Joi.string().required().messages({
    "any.required": "Model is required",
    "string.empty": "Model cannot be empty",
  }),
  color: Joi.string().required().messages({
    "any.required": "Color is required",
    "string.empty": "Color cannot be empty",
  }),
  fuelType: Joi.string().required().messages({
    "any.required": "Fuel type is required",
    "string.empty": "Fuel type cannot be empty",
  }),
  status: Joi.string().required().messages({
    "any.required": "Status is required",
    "string.empty": "Status cannot be empty",
  }),
  insurance: Joi.string().optional().allow(""),
  notes: Joi.string().optional().allow(""),
});

// const { createError } = require("../utils/create-error");

// const carValidator = async (req, res, next) => {
//   const { licensePlate, brand, model, color, fuelType } = req.body;

//   // check which field is empty
//   if (!licensePlate) {
//     createError("License plate is required", 400, "licensePlate");
//   }

//   if (!brand) {
//     createError("Brand is required", 400, "brand");
//   }

//   if (!model) {
//     createError("Model is required", 400, "model");
//   }

//   if (!color) {
//     createError("Color is required", 400, "color");
//   }

//   if (!fuelType) {
//     createError("Fuel type is required", 400, "fuelType");
//   }

//   next();
// };

module.exports = carValidator;
