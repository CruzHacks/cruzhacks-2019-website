import React, {Component} from 'react';

class Bar extends Component {
    constructor(props) {
        const days = {
            5: 'Fri',
            6: 'Sat',
            7: 'Sun'
        }
        const now = new Date();
        const day = days[now.getDay()]
        let start = (now.getHours() > 12 ? now.getHours() - 12: now.getHours()) + ":" + (now.getMinutes() / 50)
        let pm = true
        console.log(now.getTime())
        if (parseInt(start.split(":")[0]) >= 12) {
            start %= 12
            pm = true
        }
        super(props)
        this.state = {
            'top': {
                'top': this.getTop(day, start, pm) + 150
            },
            'days': {
                5: 'Fri',
                6: 'Sat',
                7: 'Sun'
            }
        }
    }



    getTop(day, start, pm) {
        let offset = 90
        if (day === "Fri") {
            offset += (parseInt(start.split(":")[0]) - 5) * 90
        } else if (day === "Sat") {            
            offset = 800 + Math.abs(parseInt(start.split(":")[0]) + parseInt(start.split(":")[1]) / 50 ) * 90
            if (pm) {
                offset = offset + 1100
            }
        } else if (day === "Sun") {
            if (parseInt(start.split(":")[0]) === 12) {
                offset = 3070
            } else {
                offset = 3070 + Math.abs(parseInt(start.split(":")[0]) + parseInt(start.split(":")[1]) / 50 ) * 90                
            }
            if (pm) {
                offset = offset + 1100
            }
        }
        return offset
    }
    render() {
        return (
            <div className="current-time bar" style={this.state.top}></div>
        );
    }
}

export default Bar;
