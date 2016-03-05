import React from 'react'

var Navbar = React.createClass({
  render() {
    return (
      <ul className='list-reset flex-wrap'>
        <li className="inline-block mr1 ml-auto"><a href="/">Home</a></li>
        <li className="inline-block mr1"><a href="/about/">About</a></li>
        <li className="inline-block mr1"><a href="/blog/">Blog</a></li>
        <li className="inline-block mr1"><a href="/portfolio/">Portfolio</a></li>
      </ul>

    )
  }
});
export default Navbar;
