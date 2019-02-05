import React, { Component } from 'react';
import OnVisible, { setDefaultProps } from 'react-on-visible';

setDefaultProps({
    visibleClassName: 'appear',
    bounce: true,
    percent: 50
});

class ColumnStats extends Component {
  render() {
    return (
      <div className="colstats">
        {this.props.stats.map(metric => (
          <OnVisible className="colstats__metric">
            <div className="colstats__metric__stat">{metric.stat}</div>
            <div className="colstats__metric__describer">{metric.describer}</div>
          </OnVisible>
        ))}
      </div>
    )
  }
  static defaultProps = {
    stats: [
      {
        stat: 0,
        describer: "default"
      },
      {
        stat: 0,
        describer: "default"
      },
      {
        stat: 0,
        describer: "default"
      },
    ]
  }
}

export default ColumnStats;
