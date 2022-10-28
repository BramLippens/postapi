const { getKnexInstance, tables } = require('../database/db');
const { v4: uuidv4 } = require('uuid');

class UserDAO {
  async createUser(first_name, last_name, email, password) {
    const id = await getKnexInstance()(tables.user)
      .insert({
        id: uuidv4(),
        first_name,
        last_name,
        email,
        password,
      })
      .returning('id');
    return id;
  }
  async getUser(id) {
    const user = await getKnexInstance()(tables.user).where({ id }).first();
    return user;
  }
  async updateUser(id, firstName, lastName, email) {
    const [updatedId] = await getKnexInstance()(tables.user).where({ id }).update({
      first_name: firstName,
      last_name: lastName,
      email,
    });
    return updatedId;
  }
  async getUsers() {
    const users = await getKnexInstance()(tables.user);
    return users;
  }
  async getUserByEmail(email) {
    const user = await getKnexInstance()(tables.user).where({ email }).first();
    return user;
  }
}

module.exports = new UserDAO();
