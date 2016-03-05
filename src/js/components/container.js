import React from 'react'
import acecss from 'ace-css/css/ace.min.css'
import styles from './styles.css'
import Head from './head'


var Container = React.createClass({
  render() {
    return (
      <div className='m4'>
        <Head />
        {this.props.children}
      </div>
    )
  }
});
export default Container;
