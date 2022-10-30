const createServer = require('../create_server');

// This is the main function that will be called when the server is started
// It is an async function so that we can use await
async function main() {
  try {
    // We create the server
    const server = await createServer();
    // We start the server
    await server.start();

    async function onClose() {
      await server.stop();
      process.exit(0);
    }

    process.on('SIGTERM', onClose);
    process.on('SIGQUIT', onClose);
  } catch (err) {
    process.exit(-1);
  }
}

main();
