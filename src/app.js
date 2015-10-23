/* eslint-env browser */
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { fromJS } from 'immutable';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
const getRoutes = require('routes');

const initialState = window.__INITIAL_STATE__;

Object
  .keys(initialState)
  .forEach(key => {
    initialState[key] = fromJS(initialState[key]);
  });

const history = createBrowserHistory();
const store = require('./store')(initialState);

window.dev = { store };

const component = (
  <Router history={history}>{getRoutes(store.getState())}</Router>
);

function render() {
  ReactDOM.render(
    <Provider store={store} key="provider">
      {component}
    </Provider>,
    document.getElementById('react-view')
  );
}

store.subscribe(render);
render();
