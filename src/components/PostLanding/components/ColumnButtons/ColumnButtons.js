import React, { Component } from 'react';
import { darken } from 'polished'
import OnVisible, { setDefaultProps } from 'react-on-visible';

setDefaultProps({
    visibleClassName: 'appear',
    bounce: true,
    percent: 50
});

class ColumnButtons extends Component {
  render() {
    return (
      <div className="colbuttons">
        {this.props.buttons.map(button => (
          <OnVisible wrappingElement="a" className="colbuttons__button" href={button.link} target="_blank">
            <img className="colbuttons__icon" src={`https://icongr.am/feather/${button.icon}.svg?size=60&color=${button.color}`} alt={button.alt} />
            <div className="colbuttons__text" style={{'color': darken(0.2, `#${button.color}`)}}>{button.text}</div>
          </OnVisible>
        ))}
      </div>
    )
  }
  static defaultProps = {
    buttons: [
      {
        icon: `square`,
        alt: `default`,
        text: `default`,
        link: `https://google.com/`,
        color: `FCF9FF`,
      },
      {
        icon: `square`,
        alt: `default`,
        text: `default`,
        link: `https://google.com/`,
        color: `FCF9FF`,
      },
    ]
  }
}

export default ColumnButtons;
