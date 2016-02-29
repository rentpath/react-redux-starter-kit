import React from 'react'

import { IndexRoute, Route } from 'react-router'
import {
    App,
    About,
    Books,
    Home,
    NotFound
  } from 'containers'

export default state => {
  return (
    <Route path="/" component={App} state={state}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="books" component={Books}/>

      { /* Catch all  */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  )
}
