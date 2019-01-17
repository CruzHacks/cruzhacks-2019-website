import React, {Component} from 'react';

class Announcement extends Component {
  render() {
    return (
        <div className="announcement">
          <span className="announcement__time">{this.props.time}</span>
          <span className="announcement__day">{this.props.day}</span>
          <h1 className="announcement__title">{this.props.title}</h1>
          <p className="announcement__text">{this.props.text}</p>
        </div>
    );
  }
}

export default Announcement;
