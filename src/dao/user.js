const { getKnexInstance, tables } = require('../database/db');
const { v4: uuidv4 } = require('uuid');

class UserDAO {
  async registerUser(email, password) {
    const user = await getKnexInstance()(tables.user)
      .insert({
        id: uuidv4(),
        email,
        password,
      })
      .returning('*');
    return user[0];
  }
  async getUserByEmail(email) {
    const user = await getKnexInstance()(tables.user).select().where('email', email).first();
    return user;
  }
}

module.exports = new UserDAO();
