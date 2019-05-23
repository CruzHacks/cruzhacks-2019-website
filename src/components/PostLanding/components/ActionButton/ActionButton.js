import React, { Component } from 'react'
import OnVisible, { setDefaultProps } from 'react-on-visible';

setDefaultProps({
    visibleClassName: 'appear',
    bounce: true,
    percent: 50
});


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
        type: `sponsorship`,
        name: 'Bring your brand to 2020',
        link: `mailto:sponsor@cruzhacks.com`,
        className: "actionbutton__sponsorship"
      },
      {
        type: `codeOfConduct`,
        name: 'Our Code of Conduct',
        link: `https://static.mlh.io/docs/mlh-code-of-conduct.pdf`,
        className: "actionbutton__codeOfConduct"
      },
    ],
  }
}

export default ActionButton;
