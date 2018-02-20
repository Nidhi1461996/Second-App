import React, { Component } from 'react';
import './heading.css';

class Heading extends Component {
  render() {
    return (
      <div>
        <header><b>{this.props.value}</b></header>
      </div>
    );
  }
}

export default Heading;

