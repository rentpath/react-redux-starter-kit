const { createStore } = require('redux');

module.exports = function configureStore(initialState) {
  const store = createStore(require('./reducers'), initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

//import { createStore, applyMiddleware, compose } from 'redux';
//import { reduxReactRouter } from 'redux-router';
//import createLogger from 'redux-logger';
//import createHistory from 'history/lib/createBrowserHistory';
//import { persistState } from 'redux-devtools';

//const routes = require('routes');
//const rootReducer = require('reducers');
//const DevTools = require('containers').DevTools;

//const finalCreateStore = compose(
  //reduxReactRouter({ routes, createHistory }),
  //applyMiddleware(createLogger()),
  //DevTools.instrument(),
  //persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
//)(createStore);

//export default function configureStore(initialState) {
  //const store = finalCreateStore(rootReducer, initialState);

  //if (module.hot) {
// //Enable Webpack hot module replacement for reducers
    //module.hot.accept('../reducers', () => {
      //const nextRootReducer = require('../reducers');
      //store.replaceReducer(nextRootReducer);
    //});
  //}

  //return store;
//}
