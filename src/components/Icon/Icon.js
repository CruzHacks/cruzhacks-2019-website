import React, { Component } from 'react'

class Icon extends Component {
  render() {
    return <img className={this.props.className} src={`https://icongr.am/feather/${this.props.icon}.svg?size=${this.props.size}&color=${this.props.color}`} alt={this.props.alt || this.props.icon} />
  }
  static defaultProps = {
    className: ``,
    size: 32,
    icon: `square`,
    color: `f9f9f9`
  }
}

export default Icon;
