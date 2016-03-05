import React from 'react';
import PortfolioGallery from '../components/portfolioGallery'
import Container from '../components/container'


var PortfolioGalleryRoute = React.createClass({
  render() {
    return (
      <Container>
        <div className='flex my4'>
          <PortfolioGallery />
        </div>
      </Container>
    )
  }
});
export default PortfolioGalleryRoute;
