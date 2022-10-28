const config = require('config');
module.exports = {
  log: {
    level: 'silly',
    disabled: false,
  },
  postgresdatabase: {
    client: 'postgresql',
    connection: {
      host: 'PGHOST',
      port: 'PGPORT',
      user: 'PGUSER',
      password: 'PGPASSWORD',
      database: 'PGDATABASE',
    },
  },
};
