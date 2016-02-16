// Creates a Redux store that holds the single complete state tree.
import { createStore } from 'redux';

// applies middleware to the dispatch method of the Redux store.
import { applyMiddleware } from 'redux';

// compose(f, g, h) is identical to arg => f(g(h(arg))).
import { compose } from 'redux';

// allows actions to return promises for ajax requests.
import thunk from 'redux-thunk';

// exposes single constructor function for creating logger middleware.
import createLogger from 'redux-logger';

// loads ./reducers/index.js
import rootReducer from './reducers';

// May not be needed. ref: https://github.com/zalmoxisus/redux-devtools-extension/issues/5
import DevTools from './containers/DevTools/DevTools';

// "export default function" means you can call the require statement as a function.
export default function configureStore(initialState) {

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, createLogger()),
      DevTools.instrument()
    )
  );

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
