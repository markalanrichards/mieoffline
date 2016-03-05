import React from 'react'
import { Router, Route, Link} from 'react-router'

import PortfolioGallery from './routes/portfolioGalleryRoute'
import PortfolioProject from './routes/portfolioProjectRoute'
import About from './routes/aboutRoute'
import Home from './routes/homeRoute'
import Blog from './routes/blogRoute'

var routes = (
  <Router>
    <Route path="about" component={About}/>
    <Route path="portfolio" component={PortfolioGallery}/>
    <Route path="portfolio/:projectId" component={PortfolioProject}/>
    <Route path="/blog" component={Blog}/>
    <Route path="/" component={Home}/>
  </Router>
)

export default routes
