import React, { Component } from 'react';
import OnVisible, { setDefaultProps } from 'react-on-visible';

setDefaultProps({
    visibleClassName: 'appear',
    bounce: true,
    percent: 50
});

class Collage extends Component {
  render() {
    return (
      <OnVisible className="collage">
        {this.props.photos.map(photo => (
          <img src={photo}/>
        ))}
      </OnVisible>
    )
  }
  static defaultProps = {
    photos: [``,``,``]
  }
}

export default Collage;
