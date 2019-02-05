import React, { Component } from 'react';
import OnVisible, { setDefaultProps } from 'react-on-visible';

setDefaultProps({
    visibleClassName: 'appear',
    bounce: true,
    percent: 40
});

class BigStat extends Component {
  render() {
    return (
      <div className="bigstat">
        <div className="bigstat__container">
          <OnVisible className="bigstat__intro">{this.props.metric.intro}</OnVisible>
          <OnVisible className="bigstat__stat">{this.props.metric.stat}</OnVisible>
          <OnVisible className="bigstat__outro">{this.props.metric.outro}</OnVisible>
        </div>
        <div className="bigstat__bg"></div>
      </div>
    )
  }

  static defaultProps = {
    metric: {
      intro: `Tempor ipsum eiusmod anim mollit laborum do excepteur fugiat.`,
      stat: `3983`,
      outro: `Id aute fugiat id labore incididunt duis reprehenderit exercitation.`,
    }
  }
}

export default BigStat;
