import React, {Component} from 'react';

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
                    <div className="schedule-item">
                        <span className="time">5:00 – 6:30</span>
                    </div>
                    <div className="schedule-item" style={{"marginTop": "5rem", "paddingTop": "15rem"}}></div>
                    <div className="schedule-item" style={{"marginTop": "5rem", "paddingTop": "10rem"}}></div>
                </div>
                <div className="schedule-column general">
                    <div className="schedule-item" style={{"marginTop": "35rem", "paddingTop": "15rem"}}></div>
                </div>
                <div className="schedule-column general">
                    <div className="schedule-item" style={{"marginTop": "5rem", "paddingTop": "25rem"}}></div>
                </div>
            </div>
        </div>
    );
  }
}

export default Schedule;
