const { join } = require('path');
const { config } = require('config');
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: config.get('postgresdatabase.connection.host'),
      port: config.get('postgresdatabase.connection.port'),
      database: config.get('postgresdatabase.connection.database'),
      user: config.get('postgresdatabase.connection.user'),
      password: config.get('postgresdatabase.connection.password'),
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
