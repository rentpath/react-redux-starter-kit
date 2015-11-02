// require just the ES6-to-JS conversion part of babel
require('babel-core/polyfill');

// the environment object is merged into the exports object below
const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

// exports are returned as a result of the require('src/config') statement
module.exports = Object.assign({

  // environment variables
  port: process.env.PORT,
  apiPort: process.env.APIPORT,

  // used in the root <html> template
  app: {
    title: 'React Redux Example',
    description: 'All the modern best practices in one example.',
    meta: {
      charSet: 'utf-8',
      property: {
        'og:site_name': 'React Redux Example',
        'og:image': 'https://react-redux.herokuapp.com/logo.jpg',
        'og:locale': 'en_US',
        'og:title': 'React Redux Example',
        'og:description': 'All the modern best practices in one example.',
        'twitter:card': 'summary',
        'twitter:site': '@erikras',
        'twitter:creator': '@erikras',
        'twitter:title': 'React Redux Example',
        'twitter:description': 'All the modern best practices in one example.',
        'twitter:image': 'https://react-redux.herokuapp.com/logo.jpg',
        'twitter:image:width': '200',
        'twitter:image:height': '200'
      }
    }
  }
}, environment);

