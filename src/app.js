/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { fromJS } from 'immutable';

const initialState = window.__INITIAL_STATE__;

Object
  .keys(initialState)
  .forEach(key => {
    initialState[key] = fromJS(initialState[key]);
  });

const store = require('./store')(initialState);

const App = require('components').App;

window.dev = { store };

function render() {
  ReactDOM.render(
    <App state={store.getState()} dispatch={store.dispatch} />,
    document.getElementById('react-view')
  );
}

store.subscribe(render);
render();
