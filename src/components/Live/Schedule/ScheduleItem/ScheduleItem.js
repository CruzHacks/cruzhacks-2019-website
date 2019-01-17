import React, {Component} from 'react';

class ScheduleItem extends Component {
    constructor(props) {
        super(props)
        const height = parseFloat(this.props.length) * 100        
        this.state = {
            height: height,
            top: this.getTop(this.props.day, this.props.start)
        }
        console.log(this.state.top)
    }

    getTop(day, start) {
        let offset = 100
        if (day === "Fri") {
            offset += (parseInt(start.substr(0, 1)) - 5) * 85
        } else if (day === "Sat") {
            offset = 720
        } else if (day === "Sun") {
            offset = 1440
        }
        return offset
    }

    render() {
        return (
            <div className="schedule-item" style={{"height": this.state.height, "top": this.state.top + "px"}}>
                <span className="time">{this.props.start + (this.props.pm ? "pm" : "am") + " – " + this.props.end + (this.props.pm ? "pm" : "am")}</span>
                <span className="title">{this.props.title}</span>
            </div>
        );
    }
}

export default ScheduleItem;
