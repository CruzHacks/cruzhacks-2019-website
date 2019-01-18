import React, {Component} from 'react';
import HorziontalScroll from 'react-scroll-horizontal';

import Announcement from './Announcement';

class Announcements extends Component {
  render() {
    return (
          <div className="announcements">
            <span className="announcements__title">Announcements</span>
            <HorziontalScroll className="announcements-container">
              <Announcement title="Dinner is now being Served!" day="Fri" time="10:43pm" />
              <Announcement title="Dinner is Served!" day="Fri" time="10:43pm" />
              <Announcement title="Dinner is Served!" day="Fri" time="10:43pm" />
              <Announcement title="Dinner is Served!" day="Fri" time="10:43pm" />
              <Announcement title="Dinner is Served!" day="Fri" time="10:43pm" />
              <Announcement title="Dinner is Served!" day="Fri" time="10:43pm" />
            </HorziontalScroll>
          </div>
    );
  }
}

export default Announcements;
