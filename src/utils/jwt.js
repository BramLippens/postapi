const jwt = require('jsonwebtoken');
const config = require('config');
const logger = require('./logging').getLogger;

const generateToken = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    config.get('auth.jwt.secret'),
    {
      expiresIn: config.get('auth.jwt.expiresIn'),
    }
  );
  logger().silly(`jwt: Generated token: ${token}, for user: ${user.email}`);
  return token;
};

const verifyToken = (token) => {
  try {
    logger().silly(`jwt: Verifying token: ${token}`);
    const decoded = jwt.verify(token, config.get('auth.jwt.secret'));
    return decoded;
  } catch (err) {
    logger().error(err);
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
