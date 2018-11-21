const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const router = require('../router');

// All the server logic for both the http and https server
const unifiedServer = function(req,res){

  // Parse the url
  const parsedUrl = url.parse(req.url, true);

  // Get the path
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  // Get the query string as an object
  const queryStringObject = parsedUrl.query;

  // Get the HTTP method
  const method = req.method;

  //Get the headers as an object
  const headers = req.headers;

  // Get the payload,if any
  const decoder = new StringDecoder('utf-8');
  let buffer = '';

  // Not-Found handler (Defined here to remove dependency of server on router/handlers)
  const notFoundHandler = function (data, callback) {
    callback(404, {
      message: 'Not found'
    });
  };

  req.on('data', (data) => {
    buffer += decoder.write(data);
  });
  req.on('end', () => {
    buffer += decoder.end();

    // Construct the data object to send to the handler
    const data = {
      trimmedPath : trimmedPath,
      queryStringObject : queryStringObject,
      method : method,
      headers : headers,
      payload : buffer
    };

    // Find route for a matching path and method. If one is not found, use the notFound handler instead.
    const route = router.find(p => p.path === trimmedPath && p.method === data.method) || { handler: notFoundHandler};

    // extract handler from selected route
    const chosenHandler = route.handler;

    // Route the request to the handler specified in the router
    chosenHandler(data,(statusCode,payload) => {

      // Use the status code returned from the handler, or set the default status code to 200
      statusCode = typeof(statusCode) == 'number' ? statusCode : 200;

      // Use the payload returned from the handler, or set the default payload to an empty object
      payload = typeof(payload) == 'object'? payload : {};

      // Convert the payload to a string
      const payloadString = JSON.stringify(payload);

      // Return the response
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(statusCode);
      res.end(payloadString);
      console.log(trimmedPath,statusCode);
    });

  });
};

module.exports = unifiedServer;
