import React from 'react'
import { Link } from 'react-router'

var Navbar = React.createClass({
  render() {
    return (
      <ul className='list-reset flex-wrap'>
        <li className="inline-block mr1 ml-auto"><Link to="/">Home</Link></li>
        <li className="inline-block mr1"><Link to="/about/">About</Link></li>
        <li className="inline-block mr1"><Link to="/blog/">Blog</Link></li>
        <li className="inline-block mr1"><Link to="/portfolio/">Portfolio</Link></li>
      </ul>

    )
  }
});
export default Navbar;
