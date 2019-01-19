import React, {Component} from 'react';
import ScheduleItem from './ScheduleItem/ScheduleItem';

class Schedule extends Component {
  render() {
    return (      
        <div className="live-schedule">
            <span className="live-schedule__title">Schedule</span>
            <div className="schedule-container">
                <span></span>
                <span className="large">General</span>
                <span className="large">Workshops</span>
                <span className="large">Activities</span>
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
                    <span className="time-day">SUN</span>
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
                    <ScheduleItem 
                        start="8:00"
                        end="9:00"
                        length="1"
                        day="Sat"
                        title="Breakfast Served" 
                    />
                    <ScheduleItem 
                        start="1:00"
                        end="2:30"
                        pm
                        length="1.5"
                        day="Sat"
                        title="Lunch HoMs" 
                    />  
                    <ScheduleItem 
                        start="6:00"
                        end="7:30"
                        length="1.5"
                        pm
                        day="Sat"
                        title="Panda Express!" 
                    />   
                    <ScheduleItem 
                        start="12:00"
                        end="12:30"
                        length=".5"
                        day="Sun"
                        title="Secret Snack" 
                    /> 
                    <ScheduleItem 
                        start="8:00"
                        end="9:30"
                        length="1.5"
                        day="Sun"
                        title="Breakfast" 
                    /> 
                    <ScheduleItem 
                        start="10:00"
                        end="10:00"
                        length="2"
                        day="Sun"
                        title="CODE FREEZE!" 
                    />
                    <ScheduleItem 
                        start="11:45"
                        end="1:00"
                        length="1.5"
                        day="Sun"
                        title="Judging" 
                    />                                          
                    <ScheduleItem 
                        start="2:00"
                        end="2:30"
                        pm
                        length=".5"
                        day="Sun"
                        title="Closing Speakers" 
                    />                                          
                    <ScheduleItem 
                        start="2:00"
                        end="3:00"
                        pm
                        length="1"
                        day="Sun"
                        title="Announce Winners" 
                    />
                    <ScheduleItem 
                        start="3:00"
                        end="3:30"
                        pm
                        length=".5"
                        day="Sun"
                        title="Expo Winners" 
                    />
                    <ScheduleItem 
                        start="4:00"
                        end="4:30"
                        pm
                        length="1"
                        day="Sun"
                        title="Last Remarks" 
                    />
                </div>
                <div className="schedule-column workshops">
                    <ScheduleItem 
                        start="8:30"
                        end="9:00"
                        pm
                        length=".5"
                        day="Fri"
                        title="ChangeMaker" 
                    />  
                    <ScheduleItem 
                        start="9:30"
                        end="10:30"
                        pm
                        length="1"
                        day="Fri"
                        title="NodeJS w Azure " 
                    />   
                    <ScheduleItem 
                        start="10:30"
                        end="11:30"
                        pm
                        length="1"
                        day="Fri"
                        title="Intro to Python" 
                    />           
                    <ScheduleItem 
                        start="10:00"
                        end="11:00"
                        length=".5"
                        day="Sat"
                        title="AWS Workshop" 
                    />
                    <ScheduleItem 
                        start="11:00"
                        end="12:00"
                        length="1"
                        day="Sat"
                        title="Alexa Workshop (A)" 
                    />  
                    <ScheduleItem 
                        start="12:00"
                        end="1:00"
                        length="1"
                        day="Sat"
                        title="Web Dev Workshop" 
                    />  
                    <ScheduleItem 
                        start="3:00"
                        end="3:30"
                        length=".5"
                        pm
                        day="Sat"
                        title="Security Workshop" 
                    />
                    <ScheduleItem 
                        start="3:30"
                        end="4:30"
                        length="1"
                        pm
                        day="Sat"
                        title="Alfred Young" 
                    />
                    <ScheduleItem 
                        start="11:00"
                        end="12:00"
                        pm
                        length="1"
                        day="Fri"
                        title="GCP with Blake" 
                    /> 
                    <ScheduleItem 
                        start="5:00"
                        end="6:00"
                        length="1"
                        pm
                        day="Sat"
                        title="How to Land an Internship (A)" 
                    />
                    <ScheduleItem 
                        start="8:00"
                        end="9:00"
                        length="1"
                        pm
                        day="Sat"
                        title="Docker (A)" 
                    />
                    <ScheduleItem 
                        start="9:00"
                        end="10:00"
                        length="1"
                        pm
                        day="Sat"
                        title="ReactJS + VueJS (A)" 
                    />
                    <ScheduleItem 
                        start="10:00"
                        end="11:00"
                        length="1"
                        pm
                        day="Sat"
                        title="3D Printing (A)" 
                    />                       
                    <ScheduleItem 
                        start="1:00"
                        end="2:00"
                        pm
                        length="1"
                        day="Sun"
                        title="Lunch (Ike's)" 
                    />                                      
                </div>
                <div className="schedule-column activities">
                    <ScheduleItem 
                        start="8:00"
                        end="8:30"
                        pm
                        length=".5"
                        day="Fri"
                        title="Team Formation" 
                    />     
                    <ScheduleItem 
                        start="10:00"
                        end="11:00"
                        pm
                        length="1"
                        day="Fri"
                        title="HashGraph" 
                    />     
                    <ScheduleItem 
                        start="1:00"
                        end="2:00"                        
                        length="1.5"
                        day="Sat"
                        title="Board Games - Telestrations (room C)" 
                    />
                    <ScheduleItem 
                        start="11:00"
                        end="11:30"
                        length="1"
                        day="Sat"
                        title="Git Workshop (C)" 
                    />  
                    <ScheduleItem 
                        start="12:00"
                        end="1:00"
                        length="1"
                        day="Sat"
                        title="Arts Division" 
                    />
                    <ScheduleItem 
                        start="5:00"
                        end="6:00"
                        length="1"
                        pm
                        day="Sat"
                        title="GCP with Justin (C)" 
                    /> 
                    <ScheduleItem 
                        start="9:00"
                        end="10:00"
                        length="1"
                        pm
                        day="Sat"
                        title="MLH Cup Stacking" 
                    />
                    <ScheduleItem 
                        start="10:00"
                        end="12:00"
                        length="2"
                        pm
                        day="Sat"
                        title="Smash Tournament (A)" 
                    />                       
                    <ScheduleItem 
                        start="1:00"
                        end="2:00"
                        length="1"
                        day="Sun"
                        title="Google Fued (C)" 
                    />                       
                    <ScheduleItem 
                        start="4:00"
                        end="5:00"
                        length="1.5"
                        day="Sun"
                        title="Circular Cup and Ping Pong Yerba Social (C)" 
                    />   
                </div>
            </div>
        </div>
    );
  }
}

export default Schedule;
