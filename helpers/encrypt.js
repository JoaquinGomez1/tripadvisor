const bcrypt = require("bcrypt");

function PasswordManagement() {
  async function encript(password, salt = 10) {
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  async function compare(textPassword, hashedPassword) {
    const doPasswordMatch = await bcrypt.compare(textPassword, hashedPassword);
    return doPasswordMatch;
  }

  return { encript, compare };
}

module.exports = PasswordManagement;
