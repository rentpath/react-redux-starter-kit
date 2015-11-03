import React from 'react';

import { IndexRoute, Route } from 'react-router';
import {
    App,
    About,
    Books,
    Home,
    Photos,
    NotFound
  } from 'containers';
import { fetchPhotosSync } from 'actions';

export default (state, dispatch) => {
  function onPhotosEnter(nextState, replaceState, callback) {
    fetchPhotosSync(dispatch, callback);
  }
  return (
    <Route path="/" component={App} state={state}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="books" component={Books}/>
      <Route path="photos" component={Photos} onEnter={onPhotosEnter}/>

      { /* Catch all  */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
