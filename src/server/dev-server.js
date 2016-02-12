// chokidar is a file-watching module
import chokidar from 'chokidar';

// webpack takes modules with dependencies
// and emits static assets representing those modules.
import webpack from 'webpack';
import config from '../../webpack/dev.config';

// function to enhance the express application with development
// mode features
export default (app) => {
  const compiler = webpack(config);

  // serves assets compiled into memory without saving them
  // to disk first (useful in hot reloading as it automatically
  // knows to wait until the assets are finished compiling
  // before serving the result).
  app.use(require("webpack-dev-middleware")(compiler, {

    // display no info to console (only warnings and errors)
    noInfo: true,

    // public path to bind the middleware to
    publicPath: config.output.publicPath
  }));

  // allows you to add hot reloading into an existing server
  // without webpack-dev-server (requires webpack-dev-middleware).
  app.use(require("webpack-hot-middleware")(compiler));

  // Do "hot-reloading" of express stuff on the server
  // Throw away cached modules and re-require next time
  // Ensure there's no important state in there!
  const watcher = chokidar.watch('.');

  // after initial scan
  watcher.on('ready', () => {

    // on every event other than ready, raw, and error
    watcher.on('all', () => {
      console.log("Clearing /server/ module cache from server");
      Object.keys(require.cache).forEach((id) => {
        if (/\/server\//.test(id)) {
          console.log("clearing: ", id);
          delete require.cache[id];
        }
      });
    });
  });

  // Do "hot-reloading" of react stuff on the server
  // Throw away the cached client modules and let them be re-required next time
  compiler.plugin('done', () => {
    console.log("Clearing /src/ module cache from server");
    Object.keys(require.cache).forEach((id) => {
      if (/\/src\//.test(id)) delete require.cache[id];
    });
  });
}
