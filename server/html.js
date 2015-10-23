import React from 'react';
import { Provider } from 'react-redux';
import { RoutingContext } from 'react-router';
import ReactDOMServer from 'react-dom/server';
import DevTools from 'containers/DevTools/DevTools';

export default (store, renderProps, state) => {
      let component = (<RoutingContext {...renderProps} />);

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
              window.__INITIAL_STATE__ = ${JSON.stringify(state)};
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

