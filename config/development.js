const config = require('config');
module.exports = {
  log: {
    level: 'silly',
    disabled: false,
  },
  port: 5000,
  postgresdatabase: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: 's43trpVtpTqH8Mq@%BVa',
      database: 'postdb',
    },
  },
};
