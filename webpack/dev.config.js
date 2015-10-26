var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: '#eval-cheap-module-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/client.js'
  ],
  output: {
    path: '/',
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __DEVELOPMENT__: true
    })
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js'],
    alias: {
      request: 'browser-request'
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
                  //exclude: /node_modules/,
        loaders: ['eslint-loader'],
        include: path.join(__dirname, '../src')
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
                   //exclude: /node_modules/,
        include: path.join(__dirname, '../src'),
        query: {
          optional: ['runtime'],
          stage: 0,
          plugins: [
            'react-display-name',
            'react-transform'
          ],
          extra: {
            'react-transform': {
              transforms: [{
                transform: 'react-transform-hmr',
                imports: ['react'],
                locals: ['module']
              },
              {
                transform: 'react-transform-catch-errors',
                imports: ['react', 'redbox-react']
              }]
            }
          }
        }
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, '../src'),
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[path][name]-[local]!autoprefixer-loader?browsers=last 3 version'
      }
    ]
  }
};
