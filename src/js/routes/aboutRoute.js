import React from 'react'
import about from 'html!../../html/about.html'
import Head from '../components/head'

var AboutRoute = React.createClass({
  render: function () {
    function getAbout () {
      return {__html: about}
    }

    return (
    <div className="container">
      <Head />
      <div dangerouslySetInnerHTML={getAbout()} />
    </div>
    )
  }
})
export default AboutRoute
