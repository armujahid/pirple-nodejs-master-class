/*
 * Primary file for API
 *
 */

// Dependencies
const http = require('http');
const https = require('https');
const config = require('./config');
const httpsServerOptions = require('./https');
const unifiedServer = require('./server');

// Instantiate the HTTP server
const httpServer = http.createServer((req,res) => {
  unifiedServer(req,res);
});

// Start the HTTP server
httpServer.listen(config.httpPort,() => {
  console.log(`The HTTP server is running on port ${config.httpPort}`);
});

// Instantiate the HTTPS server
const httpsServer = https.createServer(httpsServerOptions,(req,res) => {
  unifiedServer(req,res);
});

// Start the HTTPS server
httpsServer.listen(config.httpsPort,() => {
  console.log(`The HTTPS server is running on port ${config.httpsPort}`);
});


