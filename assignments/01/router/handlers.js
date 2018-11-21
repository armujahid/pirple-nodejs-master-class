// Define all the handlers
const handlers = {};

// Ping handler
handlers.ping = function (data, callback) {
  callback(200);
};

// Hello handler
handlers.hello = function (data, callback) {
  callback(200, {
    message: 'Hello from Abdul Rauf'
  });
};

module.exports = handlers;
