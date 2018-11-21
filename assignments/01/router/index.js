const handlers = require('./handlers');

// Define the request router
const router = [
  {
    path: 'ping',
    method: 'GET',
    handler: handlers.getPing
  },
  {
    path: 'hello',
    method: 'GET',
    handler: handlers.getHello
  },
  {
    path: 'hello',
    method: 'POST',
    handler: handlers.postHello
  }
];

// Export the module
module.exports = router;
