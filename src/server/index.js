import express from 'express';

require('css-modules-require-hook')({
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
