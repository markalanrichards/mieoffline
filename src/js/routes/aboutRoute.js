import React from 'react';
import Head from '../components/head/head'

import about from 'html!../../html/about.html'
console.log(typeof about)
var AboutRoute = React.createClass({
  render: function () {
    function getAbout() {
      return {__html: about};
    }

    return (<div dangerouslySetInnerHTML={getAbout()}/>)
  }
});
export default AboutRoute;
