import React, {Component} from 'react';
import HorziontalScroll from 'react-scroll-horizontal';

import Announcement from './Announcement';

class Announcements extends Component {
  render() {
    return (
          <div className="announcements">
            <span className="announcements__title">Announcements</span>
            <HorziontalScroll className="announcements-container">
              <Announcement title="Mentor Hotline: 1-832" day="" time="" />
              <Announcement title="Overflow Room Is Open for Hackers!" day="" time="" />
              <Announcement title="" day="" time="" />
              <Announcement title="" day="" time="" />
              <Announcement title="" day="" time="" />
              <Announcement title="" day="" time="" />
              <Announcement title="" day="" time="" />
            </HorziontalScroll>
          </div>
    );
  }
}

export default Announcements;
