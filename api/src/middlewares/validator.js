const { createError } = require("../utils/create-error");
const authValidator = require("../validators/auth-validators");

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

module.exports = validator;
