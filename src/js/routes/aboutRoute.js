import React from 'react';
import Container from '../components/container'
import about from 'html!../../html/about.html'
var AboutRoute = React.createClass({
  render: function () {
    function getAbout() {
      return {__html: about};
    }

    return (
        <Container>
        <div dangerouslySetInnerHTML={getAbout()}/>
        </Container>
    )
  }
});
export default AboutRoute;
