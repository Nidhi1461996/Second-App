import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer><b>{this.props.value}</b></footer>
      </div>
    );
  }
}

export default Footer;
