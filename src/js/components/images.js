import React from 'react'
import FakeImages from '../interface/fakeimages'

// render : function(key){
//   return <Images key={key} index={key} details={this.state.gallery[key]} />
// },

class Images extends React.Component {

  render () {
    // var gallery = this.props.imageprops
    return (
    <div className='m4'>
      <img src={gallery.image} />
      <ul className='list-reset'>
        {Object.keys(this.state.gallery).map(this.renderImages)}
      </ul>
    </div>
    )
  }
}
export default Images

/*
  <ImagesList />
*/
var ImagesList = React.createClass({
  render: function () {
    var gallery = this.props.imageprops
    return (
    <li className='list-reset'>
      <img src={gallery.image} alt={gallery.name} />
      <h3>{gallery.name}</h3>
      <p>
        {gallery.desc}
      </p>
    </li>
    )
  }
})
export default ImagesList
