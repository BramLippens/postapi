const { getKnexInstance, tables } = require('../database/db');
const { v4: uuidv4 } = require('uuid');

class UserDAO {
  async createUser(firstName, lastName, email) {
    const [id] = await getKnexInstance()(tables.user).insert({
      id: uuidv4(),
      first_name: firstName,
      last_name: lastName,
      email,
    });
    return id;
  }
}

module.exports = new UserDAO();
