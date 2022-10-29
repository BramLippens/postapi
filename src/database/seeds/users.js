const { v4: uuidv4 } = require('uuid');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    {
      id: 'a41fe957-22b4-4f1a-83e6-40aabb5106aa',
      email: 'bram.lippens09@gmail.com',
      password: 'password',
    },
    {
      id: 'a41fe111-22b4-4f1a-83e6-40aabb5106aa',
      email: 'John@gmail.com',
      password: 'password',
    },
  ]);
};
