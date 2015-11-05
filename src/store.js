// Creates a Redux store that holds the single complete state tree.
import { createStore } from 'redux';

// applies middleware to the dispatch method of the Redux store.
import { applyMiddleware } from 'redux';

// compose(f, g, h) is identical to arg => f(g(h(arg))).
import { compose } from 'redux';

// persist debug sessions across page reloads
import { persistState } from 'redux-devtools';

// allows actions to return promises for ajax requests.
import thunk from 'redux-thunk';

// exposes single constructor function for creating logger middleware.
import createLogger from 'redux-logger';

// loads ./reducers/index.js
import rootReducer from './reducers';

// May not be needed. ref: https://github.com/zalmoxisus/redux-devtools-extension/issues/5
import DevTools from './containers/DevTools/DevTools';

// finalCreateStore is a function, built from composing middlewares
// called "store enhancers", that:
//   - receives 2 arguments:
//     1. the root reducer
//       * a function built from combining all reducer functions
//     2. the initial state (optional)
//       * on the server, nothing will be passed in because the store itself
//         generates the initial state. this initial state will then be
//         inlined in the HTML and passed into finalCreateStore when it's
//         called from the client.
//   - returns the Redux store for the application.
let finalCreateStore;

// begin client-side version
if (global.__CLIENT__) {

  // it's "final" because it contains the middleware we want.
  finalCreateStore = compose(

    // thunk and createLogger() are Redux middlewares, which are different from
    // regular middlewares because they don't sit between the request and the
    // response. Redux middlewares sit between dispatching an action and the
    // moment it reaches the reducer.
    applyMiddleware(thunk),
    applyMiddleware(createLogger()),

    // is this needed? ref: https://github.com/zalmoxisus/redux-devtools-extension/issues/5
    DevTools.instrument(),

    // Lets you write ?debug_session=<name> in address bar to persist debug sessions
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))

  // createStore is the original redux function for creating a store.
  )(createStore);
  // end client-side code

// begin server-side code
} else {

  // same as client-side version above, but without persistState.
  finalCreateStore = compose(
    applyMiddleware(thunk),
    applyMiddleware(createLogger()),
    DevTools.instrument()
  )(createStore);
}

// "export default function" means you can call the require statement as a function.
export default function configureStore(initialState) {

  // the final application store.
  const store = finalCreateStore(rootReducer, initialState);

  // only run the following code if webpack-hot-middleware has been enabled in webpack
  // with a statement like:
  //
  //    app.use(require("webpack-hot-middleware")(compiler));
  //
  if (module.hot) {

    // tells Webpack that changes in the reducers folder should bubble up to the store
    module.hot.accept('./reducers', () =>

      // replaces an individual reducer from within a store.
      store.replaceReducer(require('./reducers'))
    );
  }

  return store;
}
