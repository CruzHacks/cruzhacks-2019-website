import React, {Component} from 'react';

class Announcement extends Component {
  render() {
    return (
      <div className="announcement">
        <span className="announcement__day">{this.props.day}</span>
        <span className="announcement__time">{this.props.time}</span>
        <span className="announcement__title">{this.props.title}</span>
      </div>
    );
  }
}

export default Announcement;
