var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: '#eval-source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __DEVELOPMENT__: true
    })
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'src', 'test'],
    extensions: ['', '.js'],
    alias: {
      request: 'browser-request'
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint-loader'],
        include: [
          path.join(__dirname, '../src'),
          path.join(__dirname, '../test')
        ]
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: [
          path.join(__dirname, '../src'),
          path.join(__dirname, '../test')
        ]
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, '../src'),
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[path][name]-[local]!autoprefixer-loader?browsers=last 3 version'
      }
    ]
  }
};
