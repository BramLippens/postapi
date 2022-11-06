const userDAO = require('../dao/user.js');
const { getLogger } = require('../utils/logging.js');
const config = require('config');
const { hashPassword, verifyPassword } = require('../utils/password.js');
const { generateToken } = require('../utils/jwt.js');

class UserService {
  async register(userDto) {
    const { email, password } = userDto;
    const hash = await hashPassword(password);
    getLogger().info(`Service: Password successfully hashed`);
    const user = await userDAO.registerUser(email, hash);
    getLogger().info(`Service: User created with email ${email}, id ${user.id}`);
    return await this.makeLoginData(user);
  }
  async login(email, password) {
    const user = await userDAO.getUserByEmail(email);
    if (!user) {
      return null;
    }
    const isValid = await verifyPassword(password, user.password);
    if (!isValid) {
      return null;
    }
    return await this.makeLoginData(user);
  }
  async makeLoginData(user) {
    // add token
    const token = await generateToken(user);
    return {
      user: {
        id: user.id,
        email: user.email,
      },
      token,
    };
  }
}

module.exports = new UserService();
