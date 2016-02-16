const path = require('path');

module.exports = {
  title: 'React Redux Starter Kit Style Guide',
  files: [
    '//cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css'
  ],
  output: 'dist/styleguide',
  webpackConfig: {
    module: {
      loaders: [
        {
          test: /\.css$/,
          include: path.join(__dirname, 'src'),
          loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[path][name]-[local]!autoprefixer-loader?browsers=last 3 version'
        }
      ]
    }
  }
};
