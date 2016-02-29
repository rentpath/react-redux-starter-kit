import React from 'react';

// Provider makes the store available to all connect() calls in the
// component hierarchy below. (connect() is what connects a React
// component to a Redux store.)
import { Provider } from 'react-redux';

// match is a function that compares a given path to a set of routes
// and calls your callback function with the renderProps for the
// matching route (or null)
import { match, RouterContext } from 'react-router';

// ReactDOMServer is the API for rendering React components into
// an HTML string. This is done on the server.
import ReactDOMServer from 'react-dom/server';

// pull in src/routes.js into the variable "getRoutes". It is a function
// that takes one variable, which is the Redux store.
import getRoutes from 'routes';

// this refers to /src/store.js, and it is accepted by node without
// the './' because /src is part of $NODE_PATH (I think). createStore
// accepts the initialState and returns the store for this application.
import createStore from 'store';

// the root <html> component
import HTML from '../helpers/html';

// result of generatePage() is sent to the response if there are no errors
// renderProps is pulled from request
// new store is made each request
const generatePage = (store, renderProps, initialState) => {
  const component = (
    <RouterContext {...renderProps} />
  );

  const providerComponent = (
    <Provider store={store} key="provider">
      {component}
    </Provider>
  );

  // renders page to string for transmission in HTTP response
  const htmlBody = ReactDOMServer.renderToString(
    <HTML state={initialState} component={providerComponent} />
  );

  return `
    <!DOCTYPE html>
    ${htmlBody}
  `;
};

export default (req, res) => {
  // Redux store is initialized on every page load.
  // look in the reducers for default values.
  const store = createStore();
  const initialState = store.getState();
  const routes = getRoutes(initialState);

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      console.log(error);
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      res.status(200).send(generatePage(store, renderProps, initialState));
    } else {
      res.status(404).send('Not found');
    }
  });
};
