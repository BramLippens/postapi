const { tables } = require('../db');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  // title, categories, content, userId, likes, dislikes, comments
  return knex.schema.createTable(tables.post, (table) => {
    table.uuid('id').primary();
    table.string('title').notNullable();
    table.string('category').notNullable();
    table.string('content').notNullable();
    table.string('userId').notNullable();
    table.string('likes').notNullable();
    table.string('dislikes').notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable(tables.post);
};
