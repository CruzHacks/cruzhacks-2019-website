import React, { Component } from 'react'
import OnVisible, { setDefaultProps } from 'react-on-visible';

setDefaultProps({
    visibleClassName: 'appear',
    bounce: true,
    percent: 50
});

class DonationCTA extends Component {
  render() {
    return (
      <div className="donationcta__container">
        {this.props.buttons.map(button => 
          <OnVisible wrappingElement="a" className="donationcta__button__tiny" href={button.link} target="_blank"></OnVisible>
        )}
      </div>
    )
  }

  static defaultProps = {
    buttons: [
      {
        type: `givingday`,
        link: `http://c-fund.us/jy8`
      },
      {
        type: `sponsorship`,
        link: `mailto:contact@cruzhacks.com`
      },
    ],
    sponsor: ``
  }
}

export default DonationCTA;
