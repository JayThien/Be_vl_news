const bcrypt = require("bcryptjs");

const matchPassword = (enteredPassword, password) => {
  return bcrypt.compare(enteredPassword, password);
};

module.exports = matchPassword;
