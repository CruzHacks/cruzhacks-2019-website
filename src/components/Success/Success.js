import React, { Component } from 'react';
import success from 'assets/success.svg';

class Success extends Component {
  render() {
    return (
      <div className="success">
        <img className="success__img" src={success} alt="success"/>
        <p className="success__text">{this.props.text}</p>      
      </div>
    );
  }
}

export default Success;
