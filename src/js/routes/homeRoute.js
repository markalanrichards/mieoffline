import React from 'react'
import Container from '../components/container'


import HomeHTML from 'html!../../html/home.html'
var Home = React.createClass({
  render: function () {
    function getAbout() {
      return {__html: HomeHTML};
    }

    return (
      <Container>
        <div dangerouslySetInnerHTML={getAbout()}/>
      </Container>
    )
  }
});
export default Home;
