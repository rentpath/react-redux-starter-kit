import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import DevTools from './containers/DevTools/DevTools';

let finalCreateStore;
if (global.__CLIENT__) {
  finalCreateStore = compose(
    //reduxReactRouter({ routes, createHistory }),
    applyMiddleware(thunk),
    applyMiddleware(createLogger()),
    DevTools.instrument(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore);
} else {
  finalCreateStore = compose(
    applyMiddleware(thunk),
    applyMiddleware(createLogger()),
    DevTools.instrument()
  )(createStore);
}

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers'))
    );
  }

  return store;
}
