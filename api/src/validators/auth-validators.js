const Joi = require("joi");

const authValidator = {};

authValidator.registerSchema = Joi.object({
  firstName: Joi.string().required().trim(),
  lastName: Joi.string().required().trim(),
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string()
    .required()
    .pattern(/^[a-zA-Z0-9]{6,}$/),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).strip(),
});

module.exports = authValidator;
