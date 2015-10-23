import { match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import getRoutes from 'routes';
import createStore from 'store';
import html from './html';

export default (req, res) => {
  const location = createLocation(req.url);
  const store = createStore();
  const initialState = store.getState();
  const routes = getRoutes(initialState);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (error) {
      console.log(error)
      res.status(500).send(error.message);
    } else {
      res.send(html(store, renderProps, initialState));
    }
  });
}
