// express is sinatra for node
import express from 'express';

// A CSS Module is a CSS file in which all class names and animation names
// are scoped locally by default.
//
// like: src-containers-App-App-nav
//       src-containers-App-App-link
require('css-modules-require-hook')({

  // override the default behaviour of creating locally scoped classnames
  // in css-modulesify
  generateScopedName: (exportedName, exportedPath) => {

    // This path should match the localIdentName in your webpack.config.js.
    var path = exportedPath
              .substr(1)
              .replace(/\//g, "-")
              .replace('.css', '');

    return path + "-" + exportedName;
  }
});

const app = express();

if (__DEVELOPMENT__) {
  require('./dev-server')(app);
}

// Include server routes as a middleware
app.use(function(req, res, next) {
  require('./api')(req, res, next);
});

app.use(express.static('static'));

// Anything else gets passed to the client app's server rendering
app.use(require('./renderer'));

export default app;
