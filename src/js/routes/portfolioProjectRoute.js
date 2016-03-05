import React from 'react';
import Container from '../components/container'


var PortfolioProject = React.createClass({
  componentDidMount() {
    this.setState({
      projectId: this.props.params.projectId
    })
  },
  render() {
    return (
      <Container>
        <div className="portfolio-project-title">
          <h1>Project {this.props.params.projectId} </h1>
        </div>

      </Container>
    )
  }
});
export default PortfolioProject;
