module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: ['PhantomJS2'],
    frameworks: ['mocha','chai'],

    reporters: ['progress'],

    port: 9876,
    colors: true,
    autoWatch: false,
    singleRun: true,

    logLevel: config.LOG_INFO,

    files: [
      'src/**/__tests__/*-test.js'
    ],

    preprocessors: {
      'src/**/__tests__/*-test.js': ['webpack']
    },

    webpack: require('./webpack/test.config.js'),
    webpackMiddleware: {
      noInfo: true
    },

    phantomjsLauncher: {
      exitOnResourceError: true
    },

    plugins: [
      'karma-phantomjs2-launcher',
      'karma-mocha',
      'karma-chai',
      require("karma-webpack")
    ]
  });
};
