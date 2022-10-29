const UserService = require('../service/user.js');
const { verifyToken } = require('../utils/jwt.js');

const requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  req.session = verifyToken(token);
  next();
};

module.exports = { requireAuth };
