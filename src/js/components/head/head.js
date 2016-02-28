import React from 'react'
import css from './styles.css'

var Head = React.createClass({
  render() {
    return (
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about/">About</a></li>
          <li><a href="/blog/">Blog</a></li>
          <li><a href="/portfolio/">Portfolio</a></li>
        </ul>
      </nav>
    )
  }
});
export default Head;
