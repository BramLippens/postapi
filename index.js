const express = require('express');
const { initializeKnex } = require('./database/db');
const { initializeLogger, getLogger } = require('./utils/logging');
const config = require('config');

const router = require('./routes/index');

const NODE_ENV = config.get('env');
const PORT = config.get('port') || 3000;
const LOG_LEVEL = config.get('log.level');
const LOG_DISABLED = config.get('log.disabled');

const app = express();
app.use(express.json());
app.use(router);

// starting the database
initializeKnex();

// initializing the Logger
initializeLogger({
  level: LOG_LEVEL,
  disabled: LOG_DISABLED,
});

app.listen(PORT, () => {
  getLogger().info(`Server is up on port ${PORT}`);
});
