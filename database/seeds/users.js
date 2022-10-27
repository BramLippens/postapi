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
      first_name: 'Bram',
      last_name: 'Lippens',
    },
    { id: uuidv4(), email: 'John.doe@gmail.com', first_name: 'John', last_name: 'Doe' },
    { id: uuidv4(), email: 'peter.peters@gmail.com', first_name: 'Peter', last_name: 'Peters' },
  ]);
};
