import React from 'react'

import HelloWorld from './routes/helloWorldRoute'
import RootRoute from './routes/rootRoute'
import { Router, Route, Link } from 'react-router';
var routes = (
  <Router>
    <Route path="root" component={RootRoute} />
    <Route path='hello' component={HelloWorld} />
    <Route path="/" component={RootRoute}/>

</Router>)

export default routes