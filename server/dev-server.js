import chokidar from 'chokidar';

export default (app) => {
  var webpack = require('webpack');
  var config = require('../webpack/dev.config');
  var compiler = webpack(config);

  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: config.output.publicPath
  }));
  app.use(require("webpack-hot-middleware")(compiler));

  // Do "hot-reloading" of express stuff on the server
  // Throw away cached modules and re-require next time
  // Ensure there's no important state in there!
  const watcher = chokidar.watch('.');
  watcher.on('ready', () => {
    watcher.on('all', () => {
      console.log("Clearing /server/ module cache from server");
      Object.keys(require.cache).forEach((id) => {
        if (/\/server\//.test(id)) delete require.cache[id];
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
