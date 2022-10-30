const argon2 = require('argon2');

const hashPassword = async (password) => {
  const hash = await argon2.hash(password);
  return hash;
};

const verifyPassword = async (password, hash) => {
  const isValid = await argon2.verify(hash, password);
  return isValid;
};

module.exports = {
  hashPassword,
  verifyPassword,
};
