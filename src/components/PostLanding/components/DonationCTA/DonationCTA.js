import React, { Component } from 'react'
import OnVisible, { setDefaultProps } from 'react-on-visible';
import Countdown from 'react-countdown-now';

setDefaultProps({
    visibleClassName: 'appear',
    bounce: true,
    percent: 50
});

const Completionist = () => <span>Giving Day is over. Thank you donors!</span>
 
const renderer = ({ hours, day, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    if (hours==1) {
      return <span>{hours} Giving Day hour left!</span>
    }
    return <span>{hours} Giving Day hours left!</span>;
  }
};

class DonationCTA extends Component {
  render() {
    return (
      <div className="donationcta__container">
        {this.props.buttons.map(button => 
          <OnVisible wrappingElement="a" className={button.className} href={button.link} target="_blank">{button.name}</OnVisible>
        )}
      </div>
    )
  }

  static defaultProps = {
    buttons: [
      {
        type: `givingday`,
        link: `http://c-fund.us/jy8`,
        name: <Countdown date={'Thu Feb 28 2019 00:00:00 GMT-0800'} renderer={renderer} daysInHours={true}></Countdown>,
        className: "donationcta__givingday"
      },
      {
        type: `sponsorship`,
        link: `mailto:contact@cruzhacks.com`,
        name: 'Prospective Sponsors',
        className: "donationcta__sponsorship"
      },
    ],
    sponsor: ``
  }
}

export default DonationCTA;
