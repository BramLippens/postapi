const express = require('express');
const { initializeKnex } = require('./src/database/db');
const { initializeLogger, getLogger } = require('./src/utils/logging');
const config = require('config');
const cors = require('cors');

const router = require('./src/routes/index');

const NODE_ENV = config.get('env');
const PORT = config.get('port') || 3000;
const LOG_LEVEL = config.get('log.level');
const LOG_DISABLED = config.get('log.disabled');

module.exports = async function createServer() {
  // initializing the Logger
  initializeLogger({
    level: LOG_LEVEL,
    disabled: LOG_DISABLED,
  });
  // starting the database
  await initializeKnex();
  const app = express();
  app.use(express.json());

  var allowlist = ['http://localhost:3000', 'http://example2.com'];
  var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
      corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
    } else {
      corsOptions = { origin: false }; // disable CORS for this request
    }
    callback(null, corsOptions); // callback expects two parameters: error and options
  };

  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
      allowedHeaders: ['Content-Type', 'Authorization'],
    })
  );
  app.use('/api', router);
  return {
    getApp() {
      return app;
    },
    start() {
      return new Promise((resolve) => {
        app.listen(PORT);
        getLogger().info(`Server is up on port ${PORT}`);
        resolve();
      });
    },
    async stop() {
      await knex.destroy();
      getLogger().info('Server is down');
    },
  };
};
