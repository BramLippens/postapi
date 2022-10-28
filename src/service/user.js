const userDAO = require('../dao/user.js');
const bcrypt = require('bcrypt');
const { getLogger } = require('../utils/logging.js');

class UserService {
  async createUser(userDto) {
    const { first_name, last_name, email, password } = userDto;
    try {
      // const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, 10);
      const id = await userDAO.createUser(first_name, last_name, email, hashedPassword);
      return id;
    } catch (error) {
      getLogger().error(error);
    }
  }
  getUser(id) {
    return userDAO.getUser(id);
  }
  updateUser(id, userDto) {
    const { firstName, lastName, email } = userDto;
    return userDAO.updateUser(id, firstName, lastName, email);
  }
  getUsers() {
    return userDAO.getUsers();
  }
  async login(email, password) {
    const user = await userDAO.getUserByEmail(email);
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}

module.exports = new UserService();
