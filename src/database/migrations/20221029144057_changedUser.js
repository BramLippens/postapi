const { tables } = require('../db');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.table(tables.user, (table) => {
    table.dropColumns('first_name', 'last_name');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.table(tables.user, (table) => {
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
  });
};
