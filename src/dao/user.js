const { getKnexInstance, tables } = require('../database/db');
const { v4: uuidv4 } = require('uuid');
const { getLogger } = require('../utils/logging');

class UserDAO {
  async registerUser(email, password) {
    const user = await getKnexInstance()(tables.user)
      .insert({
        id: uuidv4(),
        email,
        password,
      })
      .returning('*');
    getLogger().silly(`User created with email ${email}`);
    return user[0];
  }
  async getUserByEmail(email) {
    const user = await getKnexInstance()(tables.user).select().where('email', email).first();
    return user;
  }
}

module.exports = new UserDAO();
