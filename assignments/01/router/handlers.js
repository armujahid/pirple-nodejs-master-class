// Define all the handlers
const handlers = {};

// Ping handler
handlers.getPing = function (data, callback) {
  callback(200);
};

// Hello handlers
handlers.getHello = function (data, callback) {
  callback(200, {
    message: 'Hello from Abdul Rauf'
  });
};

handlers.postHello = function (data, callback) {
  callback(200, {
    message: `Hello from Abdul Rauf. Posted data is ${data.payload}`
  });
};

module.exports = handlers;
