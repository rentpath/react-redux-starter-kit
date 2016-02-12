#!/usr/bin/env node
require('babel-core/register')({});

/**
 * Define isomorphic constants.
 */
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;  // <----- DISABLES SERVER SIDE RENDERING FOR ERROR DEBUGGING
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

var config = require('config');
var server = require('server').default;

if (config.port) {
  server.listen(config.port, (err) => {
    if (err) {
      console.error(err);
    }
    console.info('----\n==> ✅  %s is running.', config.app.title);
    console.info('==> 💻  Open http://localhost:%s in a browser to view the app.', config.port);
  });
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}
