import React from 'react'

import Navbar from './navbar'
import Logo from './logo'

var Head = React.createClass({
  render() {
    return (
    <div className='flex m4'>
      <Logo />
      <Navbar />
    </div>
    )
  }
})
export default Head
