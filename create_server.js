const express = require('express');
const { initializeKnex } = require('./src/database/db');
const { initializeLogger, getLogger } = require('./src/utils/logging');
const config = require('config');

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
  app.use(router);

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
