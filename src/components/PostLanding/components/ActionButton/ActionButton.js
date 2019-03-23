import React, { Component } from 'react'
import OnVisible, { setDefaultProps } from 'react-on-visible';
import Countdown from 'react-countdown-now';

setDefaultProps({
    visibleClassName: 'appear',
    bounce: true,
    percent: 50
});

let orgapp = 'https://airtable.com/shr7xkiUfXyXlTerd'
let timedClass = "actionbutton__orgapp"
let deadline = new Date('Saturday March 23 2019 23:59:59')
let now = Date.now()
  if (deadline <= now) {
    timedClass = "actionbutton__orgapp__done"
  }

const renderer = ({ hours, days }) => {
    // Render before deadline
    hours += days * 24;
    if (hours <= 24) {
      return <span>{hours} hours left! <span role="img" aria-labelledby="Help organize 2020.">🔥🔥</span></span>
    }
    return <span>Apply to make 2020 <span role="img" aria-labelledby="fire!">🔥🔥</span></span>
}

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
        name: <Countdown date={'Saturday March 23 2019 23:59:59'} renderer={renderer}></Countdown>,
        link: orgapp,
        className: timedClass
      },
      {
        type: `sponsorship`,
        name: 'Bring your brand to 2020',
        link: `mailto:contact@cruzhacks.com`,
        className: "actionbutton__sponsorship"
      },
    ],
  }
}

export default ActionButton;
