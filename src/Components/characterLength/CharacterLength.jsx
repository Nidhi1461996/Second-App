import React, { Component } from 'react';
import propTypes from 'prop-types'; // ES6
import './characterLength.css';

class characterLength extends Component {
  render() {
    return (
      <div>
        <p id="char">{this.props.val} characters remaining</p>
      </div>
    );
  }
}

characterLength.defaultProps = {
  val: 0,
};

characterLength.propTypes = {
  val: propTypes.number,
};

export default characterLength;
