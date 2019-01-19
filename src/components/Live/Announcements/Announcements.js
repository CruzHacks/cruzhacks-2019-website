import React, {Component} from 'react';
import HorziontalScroll from 'react-scroll-horizontal';

import Announcement from './Announcement';

class Announcements extends Component {
  render() {
    return (
          <div className="announcements">
            <span className="announcements__title">Announcements</span>
            <HorziontalScroll className="announcements-container">
              {/* <Announcement title="Lunch is being served!" day="Sat" time="1:00pm" /> */}
              <Announcement title="Intro to Amazon Web Services workshop will be at Workshop A at 10:00AM" day="Sat" time="10:00am" />
              <Announcement title="There will be yoga going on at the Overflow room at 9am" day="Sat" time="8:42am" />
              <Announcement title="Need help? Text a mentor! Mentor hotline now open! Text `(832) 2-MENTOR`" day="" time="" />
              <Announcement title="Overflow Room Is Open for Hackers!" day="" time="" />
            </HorziontalScroll>
          </div>
    );
  }
}

export default Announcements;
