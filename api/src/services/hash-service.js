const bcrypt = require("bcryptjs");
const hashService = {};

hashService.hash = async (plainText) => {
  return await bcrypt.hash(plainText, 10);
};

module.exports = hashService;
