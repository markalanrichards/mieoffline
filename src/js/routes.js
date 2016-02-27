import React from 'react'

import HelloWorld from './routes/helloWorldRoute'
import AboutRoute from './routes/aboutRoute'
import RootRoute from './routes/rootRoute'
import { Router, Route, Link } from 'react-router';
var routes = (
  <Router>
    <Route path="root" component={RootRoute}/>
    <Route path='hello' component={HelloWorld}/>
    <Route path="about" component={AboutRoute}/>
    <Route path="/" component={AboutRoute}/>

  </Router>)

export default routes