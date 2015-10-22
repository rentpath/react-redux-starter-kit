import React from 'react';
import { IndexRoute, Route } from 'react-router';
import {
    App,
    About,
    Home,
    NotFound
  } from 'containers';

export default (state) => {
  return (
    <Route path="/" component={App} state={state}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>

      { /* Catch all  */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
