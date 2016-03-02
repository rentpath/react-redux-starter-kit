# React + Redux Starter Kit
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=plastic)](https://github.com/semantic-release/semantic-release)
![Build Status](https://travis-ci.org/rentpath/react-redux-starter-kit.svg?branch=master)

This starter kit is intended to gather best practices and experiment with new libs.

## [Styleguide](http://rentpath.github.io/react-redux-starter-kit/#!/react-redux-starter-kit/)

The [styleguide](http://rentpath.github.io/react-redux-starter-kit/#!/react-redux-starter-kit/) is built with [react-styleguide-generator-alt](https://github.com/theogravity/react-styleguide-generator-alt). Use it to see any component in action.

## Scripts
* `npm start` - Start the dev server and watch for changes
* `npm run lint` - Lints all files.
* `npm run lint:fix` - Lints all files and attempts to fix any issues.
* `npm test` - Runs unit tests.
* `npm run test:watch` - Same as `npm test` but watches files for changes.
* `npm run test:cov` - Generates a test coverage report.

## Commitizen
 `react-redux-starter-kit` uses [Commitizen](https://commitizen.github.io/cz-cli/) to format commit messages.
 * Install it globally `$ npm install -g commitizen`
Once you are ready to commit, follow the familiar github workflow, with a slight change.
```
$ git add <files>
$ git cz
```
`git cz` will bring up the Commitizen commit prompt, follow the instructions, and `$ git push` as usual.


## Dev Tools
  `react-redux-starter-kit` uses [Redux Dev Tools Extension](https://github.com/zalmoxisus/redux-devtools-extension/blob/master/README.md). You can [Download it from the chrome store](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

  Once installed, simply open the devtools in chrome(`cmd-option-j`) and click on the `Redux` tab.

## Script Info
 Information about available scripts can be found by running:
` $ npm run info`

## License
MIT
