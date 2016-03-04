// Creates a Redux store that holds the single complete state tree.
import { createStore } from 'redux'

// applies middleware to the dispatch method of the Redux store.
import { applyMiddleware } from 'redux'

// compose(f, g, h) is identical to arg => f(g(h(arg))).
import { compose } from 'redux'

// allows actions to return promises for ajax requests.
import thunk from 'redux-thunk'

// loads ./reducers/index.js
import rootReducer from './reducers'

// "export default function" means you can call the require statement as a function.
export default function configureStore(initialState) {
  const w = typeof window === 'object' ? window : {}
  const devToolsExtension = w.devToolsExtension ? w.devToolsExtension() : f => f

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      devToolsExtension
    )
  )

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
    )
  }
  return store
}
