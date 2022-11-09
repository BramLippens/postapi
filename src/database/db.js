const knex = require('knex');
const knexfile = require('./knexfile');
const { getLogger } = require('../utils/logging');

const config = require('config');

// const NODE_ENV = config.get('env');
const isdevelopment = true;

// TODO in production don't access the development database directly
// but decide based on the NODE_ENV environment variable
let knexInstance;

async function initializeKnex() {
  knexInstance = knex(knexfile.development);
  try {
    // await knexInstance.raw('create database postdb');
    await knexInstance.raw('SELECT 1+1 AS result');
  } catch (error) {
    getLogger().error('Could not connect to database', error);
  }

  let migrationsFailed = false;
  try {
    await knexInstance.migrate.latest();
    getLogger().info('Migrations ran successfully');
  } catch (error) {
    console.error(error);
    migrationsFailed = true;
  }
  if (migrationsFailed) {
    try {
      await knexInstance.migrate.down();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  if (isdevelopment) {
    try {
      await knexInstance.seed.run();
      getLogger().info('Seeding successful');
      // getLogger().silly(await knexInstance(tables.user).select());
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  return knexInstance;
}

function getKnexInstance() {
  if (!knexInstance) {
    throw new Error('Knex instance not initialized');
  }
  return knexInstance;
}

const tables = {
  user: 'users',
  post: 'posts',
};

module.exports = {
  initializeKnex,
  getKnexInstance,
  tables,
};
