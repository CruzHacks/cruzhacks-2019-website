import React, {Component} from 'react';
import ScheduleItem from './ScheduleItem/ScheduleItem';

class Schedule extends Component {
  render() {
    return (      
        <div className="live-schedule">
            <span className="live-schedule__title">Schedule</span>
            <div className="schedule-container">
                <span></span>
                <span>General</span>
                <span>Workshops</span>
                <span>Activities</span>
                <div className="time-column">
                    <span className="time-day">FRI</span>
                    <span>5pm</span>
                    <span>6pm</span>
                    <span>7pm</span>
                    <span>8pm</span>
                    <span>9pm</span>
                    <span>10pm</span>
                    <span>11pm</span>
                    <span className="time-day">SAT</span>
                    <span>12am</span>
                </div>
                <div className="schedule-column general">
                    <ScheduleItem 
                        start="5:00"
                        end="6:30"
                        pm
                        length="1.5"
                        day="Fri"
                        title="Hacker Check In" 
                    />  
                    <ScheduleItem 
                        start="7:00"
                        end="7:30"
                        pm
                        length=".5"
                        day="Fri"
                        title="Opening Ceremony" 
                    />  
                </div>
                <div className="schedule-column general">
                    
                </div>
                <div className="schedule-column general">
                    
                </div>
            </div>
        </div>
    );
  }
}

export default Schedule;
