import React from 'react'
import acecss from 'ace-css/css/ace.min.css'
import styles from './styles.css'
import Head from './head'
import db from '../interface/database'

class Container extends React.Component {

  constructor() {
    super()

    this.state = {
      site: {
        name: db.name,
      },
      gallery: {
        image: db.imageUrl,
        desc: db.desc
      }
    }
  }

  render() {
    // debuging state and none state
    console.log(db.imageUrl)
    console.log(this.state.gallery.image)
    return (
    <div className='m4'>
      <Head />
      {this.props.children}
    </div>
    )
  }
}
export default Container
