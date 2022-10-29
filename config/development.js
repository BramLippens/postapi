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
  auth: {
    jwt: {
      secret: 's43trpVtpTqH8Mq@%BVa',
      expiresIn: '1h',
    },
    argon: {
      saltlenght: 32,
      hashlength: 32,
      timecost: 3,
      memorycost: 2 ** 16,
    },
  },
};
