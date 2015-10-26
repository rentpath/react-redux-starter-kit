/* eslint-env browser */
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { fromJS } from 'immutable';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import getRoutes from 'routes';
import DevTools from './containers/DevTools/DevTools';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const initialState = window.__INITIAL_STATE__;

Object
  .keys(initialState)
  .forEach(key => {
    initialState[key] = fromJS(initialState[key]);
  });

const history = createBrowserHistory();
const store = require('./store')(initialState);

let component = (
  <Router history={history} children={getRoutes(store.getState())} />
);

if (__DEVELOPMENT__) {
  window.React = React; // enable debugger

  component = (
    <div>
      {component}
      <DevTools />
    </div>
  );
}

ReactDOM.render(
  <Provider store={store} key="provider">
    {component}
  </Provider>,
  document.getElementById('react-view')
);
