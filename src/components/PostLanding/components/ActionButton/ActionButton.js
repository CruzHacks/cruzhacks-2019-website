import React, { Component } from 'react'
import OnVisible, { setDefaultProps } from 'react-on-visible';
import Countdown from 'react-countdown-now';

setDefaultProps({
    visibleClassName: 'appear',
    bounce: true,
    percent: 50
});

const Completionist = () => <span>Giving Day is over. Thank you donors!</span>
let timedButton = "actionbutton__orgapp"
 
const renderer = ({ hours, days, completed }) => {
  if (completed) {
    // Render past deadline
    return <Completionist />
  } else {
    // Render before deadline
    hours =+ days * 24;
    if (hours <= 24) {
      return <span>{hours} hours left!</span>
    }
    return <span>Apply to make 2020 <span role="img" aria-labelledby="fire!">🔥🔥</span></span>
  }
};

class ActionButton extends Component {
  render() {
    return (
      <div className="actionbutton__container">
        {this.props.buttons.map(button => 
          <OnVisible wrappingElement="a" className={button.className} href={button.link} target="_blank">{button.name}</OnVisible>
        )}
      </div>
    )
  }

  static defaultProps = {
    buttons: [
      {
        type: `application`,
        link: `https://airtable.com/shr7xkiUfXyXlTerd`,
        name: <Countdown date={'Friday March 8 2019 11:59:59'} renderer={renderer}></Countdown>,
        className: timedButton
      },
      {
        type: `sponsorship`,
        link: `mailto:contact@cruzhacks.com`,
        name: 'Prospective Sponsors',
        className: "actionbutton__sponsorship"
      },
    ],
  }
}

export default ActionButton;
