/* eslint-disable */
import FriLine from 'assets/schedule/fri.svg';
import FriPlus from 'assets/schedule/fri-plus.svg';


import React, {Component} from 'react';

class Schedule extends Component {
  render() {
    return (
      <div className="schedule">
        <h2 className="schedule__title">Schedule</h2>
        <div className="schedule__column">
          <img src={FriPlus} class="column-plus" alt=""/>
          <h3 className="schedule__column__title">
            FRI
            <span className="schedule__column__date">JAN 18</span>
          </h3>
          <img src={FriLine} alt=""/>
        </div>
      </div> 
    );
  }
}

export default Schedule;
