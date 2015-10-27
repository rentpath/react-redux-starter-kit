import React from 'react';
import { Provider } from 'react-redux';
import { match, RoutingContext } from 'react-router';
import ReactDOMServer from 'react-dom/server';
import createLocation from 'history/lib/createLocation';
import createHistory from 'history/lib/createMemoryHistory';
import getRoutes from 'routes';
import DevTools from 'containers/DevTools/DevTools';
import createStore from 'store';
import HTML from '../helpers/html';

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

  const providerComponent = (
    <Provider store={store} key="provider">
      {component}
    </Provider>
  );

  const htmlBody = ReactDOMServer.renderToString(
    <HTML state={initialState} component={providerComponent} />
  );

  return `
    <!DOCTYPE html>
    ${htmlBody}
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
