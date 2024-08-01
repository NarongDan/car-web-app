const { createError, createManyError } = require("../utils/create-error");
const authValidator = require("../validators/auth-validators");
const carValidator = require("../validators/car-validator");

const validator = {};

validator.register = (req, res, next) => {
  const { value, error } = authValidator.registerSchema.validate(req.body);
  if (error) {
    createError(error.details[0].message, 400);
  }
  req.input = value;
  next();
};

validator.login = (req, res, next) => {
  const { value, error } = authValidator.loginSchema.validate(req.body);
  if (error) {
    createError(error.details[0].message, 400);
  }
  req.input = value;
  next();
};

validator.carValidate = (req, res, next) => {
  const { value, error } = carValidator.carSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    const errorDetails = error.details.map((detail) =>
      createManyError(detail.message, 400, detail.path[0])
    );

    return next(errorDetails);
  }
  req.input = value;
  next();
};

module.exports = validator;
