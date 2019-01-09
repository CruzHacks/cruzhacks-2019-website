/* eslint-disable */
import FriLine from 'assets/schedule/fri.svg';
import FriPlus from 'assets/schedule/fri-plus.svg';
import SatLine from 'assets/schedule/sat.svg';
import SatPlus from 'assets/schedule/sat-plus.svg';
import SunLine from 'assets/schedule/sun.svg';
import SunPlus from 'assets/schedule/sun-plus.svg';


import React, {Component} from 'react';

class Schedule extends Component {
  render() {
    return (
      <div className="schedule">
        <h2 className="schedule__title">Schedule</h2>
        <div className="schedule__grid">
          <div className="schedule__column">
            <img src={FriPlus} className="column-plus" alt=""/>
            <h3 className="schedule__column__title">
              FRI
              <span className="schedule__column__date">JAN 18</span>
            </h3>
            <img src={FriLine} alt=""/>
            <div className="schedule__column__content">
              <span className="schedule__item">Hacker Check In & Dinner</span>
              <span className="schedule__item--right">5:00 PM</span>
              <span className="schedule__item">Opening Ceremonies</span>
              <span className="schedule__item--right">7:00 PM</span>
              <span className="schedule__item">Hacking Begins!</span>
              <span className="schedule__item--right">9:00 PM</span>
            </div>
          </div>
          <div className="schedule__column">
            <img src={SatPlus} className="column-plus" alt=""/>
            <h3 className="schedule__column__title">
              SAT
              <span className="schedule__column__date">JAN 19</span>
            </h3>
            <img src={SatLine} alt=""/>
            <div className="schedule__column__content large">
              <span className="schedule__item">Breakfast</span>
              <span className="schedule__item--right">8:00 AM</span>
              <span className="schedule__item">Lunch</span>
              <span className="schedule__item--right">1:00 PM</span>
              <span className="schedule__item">Dinner</span>
              <span className="schedule__item--right">6:00 PM</span>
              <span className="schedule__item">Games</span>
              <span className="schedule__item--right">9:00 PM</span>
            </div>
          </div>
          <div className="schedule__column">
            <img src={SunPlus} className="column-plus" alt=""/>
            <h3 className="schedule__column__title">
              SUN
              <span className="schedule__column__date">JAN 20</span>
            </h3>
            <img src={SunLine} alt=""/>
            <div className="schedule__column__content">
              <span className="schedule__item">Code Freeze</span>
              <span className="schedule__item--right">10:00 AM</span>
              <span className="schedule__item">Judging</span>
              <span className="schedule__item--right">11:30 AM</span>
              <span className="schedule__item">Winners & Closing Ceremony</span>
              <span className="schedule__item--right">1:30 PM</span>
              <span className="schedule__item">Hackathon Ends!</span>
              <span className="schedule__item--right">3:00 PM</span>
            </div>
          </div>
        </div>
      </div> 
    );
  }
}

export default Schedule;
