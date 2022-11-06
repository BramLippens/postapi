const { v4: uuidv4 } = require('uuid');
const UserService = require('../../service/user.js');
const { getLogger } = require('../../utils/logging.js');
const { tables } = require('../db.js');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tables.user).del();
  // create a user
  const user = await UserService.register({
    email: 'bram.lippens09@gmail.com',
    password: 'Password123',
  });
  await knex(tables.user).insert([
    {
      id: 'a41fe111-22b4-4f1a-83e6-40aabb5106aa',
      email: 'John@gmail.com',
      password: 'password',
    },
  ]);
};
