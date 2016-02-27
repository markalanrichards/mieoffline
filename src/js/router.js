import routes from "./routes";
import { render } from 'react-dom';
var mainElement = document.querySelector('#main');
if (!mainElement) {
  mainElement = document.createElement('div');
  mainElement.setAttribute('id','main');
  var bodyElement = document.getElementsByTagName('body').item(0);
  bodyElement.appendChild(mainElement);
}


render  (routes
,mainElement

);
