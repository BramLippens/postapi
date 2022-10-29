const jwt = require('jsonwebtoken');
const config = require('config');

const generateToken = (user) => {
  const token = jwt.sign({ id: user.id, email: user.email }, config.get('auth.jwt.secret'), {
    expiresIn: config.get('auth.jwt.expiresIn'),
  });
  return token;
};

const verifyToken = (token) => {
  const decoded = jwt.verify(token, config.get('auth.jwt.secret'));
  return decoded;
};

module.exports = {
  generateToken,
  verifyToken,
};
