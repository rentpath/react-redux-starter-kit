import React from 'react';
import { Provider } from 'react-redux';
import { match, RoutingContext } from 'react-router';
import ReactDOMServer from 'react-dom/server';
import createLocation from 'history/lib/createLocation';
import createHistory from 'history/lib/createMemoryHistory';
import getRoutes from 'routes';
import DevTools from 'containers/DevTools/DevTools';
import createStore from 'store';

const generatePage = (store, renderProps, initialState) => {
  let component = (
    <RoutingContext {...renderProps} />
  );

  if (__DEVELOPMENT__) {
    component = (
      <div>
        {component}
        <DevTools />
     </div>
    );
  }

  const componentHTML = ReactDOMServer.renderToString(
    <Provider store={store} key="provider">
      {component}
    </Provider>
  );

  return `
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
}

export default (req, res) => {
  const location = createLocation(req.url);
  const store = createStore();
  const history = createHistory();
  const initialState = store.getState();
  const routes = getRoutes(initialState);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (error) {
      console.log(error)
      res.status(500).send(error.message);
    } else {
      res.send(generatePage(store, renderProps, initialState));
    }
  });
}
