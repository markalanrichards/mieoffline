import React from 'react'
import PortfolioGallery from '../components/portfolioGallery'
import Head from '../components/head'

var PortfolioGalleryRoute = React.createClass({
  render() {
    return (
    <div className="container">
      <Head />
      <div className='flex my4'>
        <PortfolioGallery />
      </div>
    </div>
    )
  }
})
export default PortfolioGalleryRoute
