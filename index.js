const express = require('express');
const { initializeKnex } = require('./database/db');
const { initializeLogger, getLogger } = require('./utils/logging');
const config = require('config');

// const NODE_ENV = config.get('env');
const isdevelopment = true;
const port = 9000;

const router = require('./routes/index');

const app = express();
app.use(express.json());
app.use(router);

// starting the database
initializeKnex();

// initializing the Logger
initializeLogger({
  level: 'silly',
  disabled: false,
  defaultMeta: {},
});

app.listen(port, () => {
  getLogger().info(`Server is up on port ${port}`);
});
