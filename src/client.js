/* eslint-env browser */
import React from 'react';

// Provider makes the store available to all connect() calls in the
// component hierarchy below. (connect() is what connects a React
// component to a Redux store.)
// It gives smart components access to the store and allows them to
// call dispatch.
import { Provider } from 'react-redux';

// ReactDOM is part of isomorphic React. It renders to HTML or the DOM.
// ex. ReactDOM.render(<MyComponent />, node)
import ReactDOM from 'react-dom';

// fromJS will convert nested Objects and Arrays to Immutable.Map and
// Immutable.List, respectively
import { fromJS } from 'immutable';

// Router keeps the URL in sync with what's being displayed on the page
import { Router } from 'react-router';

// history abstracts away the differences in platforms and provides a
// common API to manage history. we are only including the web
// module
import createBrowserHistory from 'history/lib/createBrowserHistory';

// pull in src/routes.js into the variable "getRoutes". It is a function
// that takes one variable, which is the Redux store.
import getRoutes from 'routes';

// polyfill the global environment (either in Node or in the browser via CommonJS)
require('es6-promise').polyfill();

// adds fetch() as a global so that its API is consistent between client and server.
// Also a polyfill
require('isomorphic-fetch');

// __INITIAL_STATE__ is a JS object inlined with React's dangerouslySetInnerHTML.
// It lets the server tell the client how it rendered the components.
const initialState = window.__INITIAL_STATE__;

// immutable-ify initial state
Object
  .keys(initialState)
  .forEach(key => {
    initialState[key] = fromJS(initialState[key]);
  });

// initialize the history, initialize the store, create the component, add devtools
// if development, and render everything
const history = createBrowserHistory();
const store = require('./store').default(initialState);

let component = (
  <Router history={history} children={getRoutes(store.getState())} />
);

ReactDOM.render(
  <Provider store={store} key="provider">
    {component}
  </Provider>,
  document.getElementById('react-view')
);
