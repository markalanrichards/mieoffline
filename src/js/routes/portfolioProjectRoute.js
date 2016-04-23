import React from 'react'
import Head from '../components/head'

import faker from 'faker'

var PortfolioProject = React.createClass({
  componentDidMount() {
    this.setState({
      projectId: this.props.params.projectId
    })
  },
  render() {
    return (
    <div className='container'>
      <h1>Project {this.props.params.projectId}</h1>
    </div>
    )
  }
})
export default PortfolioProject
