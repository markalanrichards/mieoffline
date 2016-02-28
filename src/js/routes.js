import React from 'react'

import PortfolioGalleryRoute from './routes/portfolioGalleryRoute'
import PortfolioProjectRoute from './routes/portfolioProjectRoute'
import AboutRoute from './routes/aboutRoute'
import { Router, Route, Link} from 'react-router'
var routes = (
  <Router
  >
    <Route path="about" component={AboutRoute}/>
    <Route path="portfolio" component={PortfolioGalleryRoute}/>
    <Route path="portfolio/:projectId" component={PortfolioProjectRoute}/>
    <Route path="/" component={AboutRoute}/>

  </Router>)

export default routes