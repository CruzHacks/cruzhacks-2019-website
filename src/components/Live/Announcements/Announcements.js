import React, {Component} from 'react';

import Announcement from './Announcement';

class Announcements extends Component {
  render() {
    return (
        <div className="announcements">
          <Announcement day="Sun" time="8:46pm" title="Dinner is now being served!" />
          <Announcement day="Sat" time="7:34pm" title="Dinner is now being served!" />
          <Announcement day="Fri" time="6:12pm" title="Dinner is now being served!" />
          <Announcement day="Fri" time="6:00pm" title="Dinner is now being served!" />
          <Announcement day="Fri" time="5:13pm" title="Dinner is now being served!" />
        </div>
    );
  }
}

export default Announcements;
