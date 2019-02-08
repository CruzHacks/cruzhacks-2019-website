import React, { Component } from 'react'
import OnVisible, { setDefaultProps } from 'react-on-visible';

import Icon from 'components/Icon'

setDefaultProps({
    visibleClassName: 'appear',
    bounce: true,
    percent: 50
});

class ShareButton extends Component {
  render() {
    return (
      <div className="sharebutton__container">
        {this.props.buttons.map(button => 
          <OnVisible wrappingElement="a" className="sharebutton" href={button.link} target="_blank"><Icon icon={button.type} alt={`Share on ${button.type}`} /></OnVisible>
        )}
      </div>
    )
  }
  static defaultProps = {
    buttons: [
      {
        type: `linkedin`,
        link: `http://google.com/`
      },
      {
        type: `link`,
        link: `http://google.com/`
      },
      {
        type: `slack`,
        link: `http://google.com/`
      },
      {
        type: `facebook`,
        link: `http://google.com/`
      },
    ]
  }
}

export default ShareButton;
