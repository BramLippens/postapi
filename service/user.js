const userDAO = require('../dao/user.js');

class UserService {
  createUser(userDto) {
    const { firstName, lastName, email } = userDto;
    return userDAO.createUser(firstName, lastName, email);
  }
  getUser(id) {
    return userDAO.getUser(id);
  }
  updateUser(id, userDto) {
    const { firstName, lastName, email } = userDto;
    return userDAO.updateUser(id, firstName, lastName, email);
  }
}

module.exports = new UserService();
