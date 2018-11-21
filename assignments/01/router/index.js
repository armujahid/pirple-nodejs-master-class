const handlers = require('./handlers');

// Define the request router
const router = {
  'ping' : handlers.ping
};

// Export the module
module.exports = router;
