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
                    <span>1am</span>
                    <span>2am</span>
                    <span>3am</span>
                    <span>4am</span>
                    <span>5am</span>
                    <span>6am</span>
                    <span>7am</span>
                    <span>8am</span>
                    <span>9am</span>
                    <span>10am</span>
                    <span>11am</span>
                    <span>12pm</span>
                    <span>1pm</span>
                    <span>2pm</span>
                    <span>3pm</span>
                    <span>4pm</span>
                    <span>5pm</span>
                    <span>6pm</span>
                    <span>7pm</span>
                    <span>8pm</span>
                    <span>9pm</span>
                    <span>10pm</span>
                    <span>11pm</span>
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
                        end="8:00"
                        pm
                        length="1"
                        day="Fri"
                        title="Opening Ceremony" 
                    />
                    <ScheduleItem 
                        start="8:00"
                        end="9:00"
                        pm
                        length="1"
                        day="Fri"
                        title="NPO Presentations & Team Formation" 
                    />
                    <ScheduleItem 
                        start="9:00"                        
                        pm
                        length="2"
                        day="Fri"
                        title="Hacking Begins!" 
                    />   
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
                    <ScheduleItem 
                        start="10:00"
                        end="11:30"
                        pm
                        length="1.5"
                        day="Fri"
                        title="Opening Ceremony" 
                    />
                </div>
                <div className="schedule-column general">
                    <ScheduleItem 
                        start="6:00"
                        end="7:30"
                        pm
                        length="1.5"
                        day="Fri"
                        title="Hacker Check In" 
                    />                      
                    <ScheduleItem 
                        start="10:00"
                        end="11:30"
                        pm
                        length="1.5"
                        day="Fri"
                        title="Opening Ceremony" 
                    />
                    <ScheduleItem 
                        start="12:00"
                        end="1:30"                        
                        length="1.5"
                        day="Sat"
                        title="Opening Ceremony" 
                    />
                </div>
            </div>
        </div>
    );
  }
}

export default Schedule;
