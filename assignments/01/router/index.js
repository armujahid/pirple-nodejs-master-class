const handlers = require('./handlers');

// Define the request router
const router = {
  ping: handlers.ping,
  hello: handlers.hello
};

// Export the module
module.exports = router;
