import React, { Component } from 'react';

class DisplayText extends Component {
  render() {
    return (
      <div className="displaytext">
        <div className="displaytext__header">{this.props.header}</div>
        <div className="displaytext__paragraph">{this.props.paragraph}</div>
      </div>
    )
  }
  static defaultProps = {
    header: `Vivamus eleifend sem quis varius suscipit`,
    paragraph: `Nulla non mi eu urna eleifend ornare nec sed augue. Vivamus eleifend
    sem quis varius suscipit. Nam tellus nunc, volutpat non imperdiet
    in, condimentum ac enim. Curabitur tellus ligula, pulvinar sed
    tortor et, maximus gravida neque. Fusce ac porttitor lorem, eget
    vestibulum ligula. Cras tempus sapien diam. Mauris porttitor
    vehicula nibh sed tempor. Vestibulum eget magna eros. In hac
    habitasse platea dictumst. Vivamus quis tempus metus.`
  }
}

export default DisplayText;
