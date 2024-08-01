const { JsonWebTokenError, TokenExpiredError } = require("jsonwebtoken");

const errorMiddleware = (error, req, res, next) => {
  if (
    error instanceof JsonWebTokenError ||
    error instanceof TokenExpiredError
  ) {
    error.statusCode = 401;
  }

  if (Array.isArray(error)) {
    res.status(400).json({
      errors: error.map((err) => ({
        message: err.message,
        field: err.field,
        statusCode: err.statusCode,
      })),
    });
  } else {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message, field: error.field });
  }
};

module.exports = errorMiddleware;
