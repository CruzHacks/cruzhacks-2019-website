import React, {Component} from 'react';

class ScheduleItem extends Component {
    constructor(props) {
        super(props)
        const height = parseFloat(this.props.length) * 100        
        this.state = {
            height: height,
            top: this.getTop(this.props.day, this.props.start),
            time: this.getTime(this.props.start, this.props.end)
        }
        console.log(this.state.top)
    }

    getTop(day, start) {
        let offset = 90
        if (day === "Fri") {
            offset += (parseInt(start.split(":")[0]) - 5) * 90
        } else if (day === "Sat") {
            offset = 800 + Math.abs(parseInt(start.split(":")[0]) - 12) * 90
        } else if (day === "Sun") {
            offset = 1440
        }
        return offset
    }

    getTime = (start, end) => {
        if (start && end)
            return this.props.start + (this.props.pm ? "pm" : "am") + " – " + this.props.end + (this.props.pm ? "pm" : "am")
        else if (start)
            return this.props.start + (this.props.pm ? "pm" : "am")
    }

    render() {
        return (
            <div className="schedule-item" style={{"height": this.state.height, "top": this.state.top + "px"}}>
                <span className="time">{this.state.time}</span>
                <span className="title">{this.props.title}</span>
            </div>
        );
    }
}

export default ScheduleItem;
