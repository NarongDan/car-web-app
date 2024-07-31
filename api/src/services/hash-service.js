const bcrypt = require("bcryptjs");
const hashService = {};

hashService.hash = async (plainText) => {
  return await bcrypt.hash(plainText, 10);
};

hashService.compare = (plainText, hashedValue) => {
  return bcrypt.compare(plainText, hashedValue);
};
module.exports = hashService;
