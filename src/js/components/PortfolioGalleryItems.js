import React from 'react'

var PortfolioGalleryItems = React.createClass({
  render() {
    console.log(this.state + ' bleh')
    console.log(gallerystate + ' bleh')
    return (
    <div>
      <img src='{this.props.gallery.image}' />
    </div>
    )
  }
})
export default PortfolioGalleryItems
