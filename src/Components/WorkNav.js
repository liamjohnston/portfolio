import React from 'react';
import { Link } from 'react-router-dom';

export default class extends React.Component {
  render() {
    return (
      <nav className="container nav d-flex">
        <Link to={`/`}>&laquo; Home</Link>
        <Link to={this.props.nextLink}>
          Next: {this.props.nextTitle} &raquo;
        </Link>
      </nav>
    );
  }
}
