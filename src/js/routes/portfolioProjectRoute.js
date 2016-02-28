import React from 'react';

var PortfolioProjectRoute = React.createClass({
  componentDidMount() {
    this.setState({
      projectId: this.props.params.projectId
    })
  },
  render() {
    return (
      <div>
        <div className="portfolio-project-title">
          <h1>Project {this.props.params.projectId} </h1>
        </div>

      </div>
    )
  }
});
export default PortfolioProjectRoute;
