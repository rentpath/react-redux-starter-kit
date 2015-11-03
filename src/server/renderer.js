import React from 'react';

// Provider makes the store available to all connect() calls in the
// component hierarchy below. (connect() is what connects a React
// component to a Redux store.)
import { Provider } from 'react-redux';

// match is a function that compares a given path to a set of routes
// and calls your callback function with the renderProps for the
// matching route (or null)
import { match } from 'react-router';

// renders the component tree for a given router state and sets the
// history object and the current location in context.
import { RoutingContext } from 'react-router';

// ReactDOMServer is the API for rendering React components into
// an HTML string. This is done on the server.
import ReactDOMServer from 'react-dom/server';

// A location object is conceptually similar to document.location in
// web browsers, with a few extra goodies.
import createLocation from 'history/lib/createLocation';

// createMemoryHistory is "used mainly for testing and does not persist
// state across sessions"
import createHistory from 'history/lib/createMemoryHistory';

// pull in src/routes.js into the variable "getRoutes". It is a function
// that takes one variable, which is the Redux store.
import getRoutes from 'routes';

// developer sidebar React component
import DevTools from 'containers/DevTools/DevTools';

// this refers to /src/store.js, and it is accepted by node without
// the './' because /src is part of $NODE_PATH (I think). createStore
// accepts the initialState and returns the store for this application.
import createStore from 'store';

// the root <html> component
import HTML from '../helpers/html';

// result of generatePage() is sent to the response if there are no errors
// renderProps is pulled from request
// new store is made each request
const generatePage = (store, renderProps) => {
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

  // renders page to string for transmission in HTTP response
  const htmlBody = ReactDOMServer.renderToString(
    <HTML state={store.getState()} component={providerComponent} />
  );

  return `
    <!DOCTYPE html>
    ${htmlBody}
  `
}

export default (req, res) => {
  // location is used to provide the correct renderProps to RoutingContext
  const location = createLocation(req.url);

  // Redux store is initialized on every page load.
  // look in the reducers for default values.
  const store = createStore();
  const history = createHistory();
  const routes = getRoutes(store.getState(), store.dispatch);

  // history.match
  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (error) {

      // show error in terminal window / STDOUT
      console.log(error)

      res.status(500).send(error.message);

    // on success:
    } else {
      // send rendered html as plain string.
      res.send(generatePage(store, renderProps));
    }
  });
}
