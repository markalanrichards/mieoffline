import React from 'react';
import Head from '../components/head/head'

import about from 'html!../../html/about.html'
var AboutRoute = React.createClass({
  render: function () {
    function getAbout() {
      return {__html: about};
    }

    return (
      <div>
        <Head />
        <div dangerouslySetInnerHTML={getAbout()}/>
      </div>
    )
  }
});
export default AboutRoute;
