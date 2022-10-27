const { v4: uuidv4 } = require('uuid');
const { tables } = require('../db');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tables.post).del();
  await knex(tables.post).insert([
    {
      id: uuidv4(),
      title: 'My first post',
      category: 'Funny',
      content: 'This is my first post',
      userId: 'a41fe957-22b4-4f1a-83e6-40aabb5106aa',
      likes: '0',
      dislikes: '0',
    },
    {
      id: uuidv4(),
      title: 'My second post',
      category: 'Funny',
      content: 'This is my second post',
      userId: 'a41fe957-22b4-4f1a-83e6-40aabb5106aa',
      likes: '0',
      dislikes: '0',
    },
    {
      id: uuidv4(),
      title: 'My third post',
      category: 'Wholesome',
      content: 'This is my third post',
      userId: 'a41fe957-22b4-4f1a-83e6-40aabb5106aa',
      likes: '0',
      dislikes: '0',
    },
  ]);
};
