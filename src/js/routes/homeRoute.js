import React from 'react'
import Head from '../components/head'
import Images from '../components/images'
import db from '../interface/database'

import HomeHTML from 'html!../../html/home.html'

class Home extends React.Component {
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
    console.log(this.state.gallery.image)
    function getAbout () {
      return {
        __html: HomeHTML
      }
    }
    return (
    <div className="container">
      <Head />
      <div dangerouslySetInnerHTML={getAbout()} />
      <Images imageprops={this.state.gallery} />
    </div>
    )
  }
}
export default Home
