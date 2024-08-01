// กรณีตัวเดียว

const createError = (msg, statusCode, field) => {
  const error = new Error(msg);
  error.statusCode = statusCode;
  error.field = field;
  throw error;
};

// กรณีหลายตัว
const createManyError = (msg, statusCode, field) => {
  return { message: msg, statusCode: statusCode, field: field };
};

module.exports = { createError, createManyError };
