import React, { Component } from "react";
import axios from "axios";
import OnVisible, { setDefaultProps } from "react-on-visible";

setDefaultProps({
  visibleClassName: "appear",
  bounce: true,
  percent: 50
});

class SubscriberInput extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.state = {email: ''}
    this.validateAndSubmit = this.validateAndSubmit.bind(this)
  }
  
  getEmail = (event) => {
    this.setState({email: event.target.value});
  }

  validateAndSubmit() {
    if (this.form.current.reportValidity()) {
      // data object to be sent in request
      let data = JSON.stringify({
        email_address: this.state.email,
        status: 'pending'
      });

      // basic auth username and password
      var uname = process.env.REACT_APP_MAILCHIMP_USER;
      var key = process.env.REACT_APP_MAILCHIMP_SECRET;

      axios.post(process.env.REACT_APP_MAILCHIMP_SUBSCRIBERS_ENDPOINT, data, {
        auth: {
          username: uname,
          password: key
        },
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(response => {
        console.log("Successfully Added New Member to List");
        console.log(response);
      }).catch(error => {
        if (error.response.data.title === "Member Exists") {
          console.log("Member Already Exists");
        } else {
          console.error(error);
        }
      });
    }
  }

  render() {
    return (
      <OnVisible className="subscriberinput">
        <form ref={this.form} className="subscriberinput_form" onSubmit={e => e.preventDefault()}>
          <input
            className="subscriberinput_inputbox"
            id="email"
            type="email"
            placeholder="Add your email for updates!"
            size="25"
            onChange={this.getEmail}
            value={this.state.email}
            required
          />
        </form>
        <button className="subscriberinput_submitbutton" onClick={this.validateAndSubmit}></button>
      </OnVisible>
    );
  }
}

export default SubscriberInput;
