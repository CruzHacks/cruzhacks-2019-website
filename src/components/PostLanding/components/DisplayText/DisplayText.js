import React, { Component } from 'react';
import ActionButton from 'components/PostLanding/components/ActionButton'

class DisplayText extends Component {
  render() {
    return (
      <div className="displaytext">
        <div className="displaytext__header" style={{textAlign: this.props.left ? 'left' : 'center'}}>{this.props.header}</div>
        <div className="displaytext__paragraph" style={{textAlign: this.props.left ? 'left' : 'center'}}>{this.props.paragraph}</div>
        {this.props.campaignButtons && <ActionButton />}
      </div>
    )
  }
  static defaultProps = {
    header: ``,
    paragraph: ``
  }
}

export default DisplayText;
