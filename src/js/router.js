import routes from './routes'
import { render } from 'react-dom'
import PortfolioGallery from './routes/portfolioGalleryRoute'
import PortfolioProject from './routes/portfolioProjectRoute'
import About from './routes/aboutRoute'
import Home from './routes/homeRoute'
import Blog from './routes/blogRoute'

var mainElement = document.querySelector('#main');
if (!mainElement) {
    mainElement = document.createElement('div');
    mainElement.setAttribute('id', 'main');
    var bodyElement = document.getElementsByTagName('body').item(0);
    bodyElement.appendChild(mainElement);
}


render(routes, mainElement);
