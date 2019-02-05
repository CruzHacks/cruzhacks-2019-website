import React, { Component } from 'react';

import Sponsor from './Sponsor'
import General from './General'

class PostLanding extends Component {
  render() {
    return this.props.sponsor ? <Sponsor /> : <General />
  }
}

export default PostLanding;
