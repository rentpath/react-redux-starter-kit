import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';

const { App } = require('components');
const createStore = require('store');

export default (req, res) => {
  const location = createLocation(req.url);
  const store = createStore();
  const initialState = store.getState();

  var componentHTML = ReactDOMServer.renderToString(
    <App state={initialState} dispatch={() => null}/>
  );

  const page = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Isomorphic Redux Demo</title>
        <script type="application/javascript">
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <link href="/normalize.css" rel="stylesheet" />
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <script type="application/javascript" src="/bundle.js"></script>
      </body>
    </html>
  `
  res.end(page);
}
