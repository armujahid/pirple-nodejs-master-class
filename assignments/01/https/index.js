const fs = require('fs');
const path = require('path');

const httpsServerOptions = {
  key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem'))
};

module.exports = httpsServerOptions;
