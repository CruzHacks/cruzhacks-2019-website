import React, { Component } from "react";
import axios from "axios";
import OnVisible, { setDefaultProps } from "react-on-visible";

setDefaultProps({
  visibleClassName: "appear",
  bounce: true,
  percent: 50
});

class SubscriberInpnut extends Component {
  constructor() {
    super();
    this.form = React.createRef();
    this.validateAndSubmit = this.validateAndSubmit.bind(this);
  }
  
  validateAndSubmit() {
    if (this.form.current.reportValidity()) {

      // user input containing valid email address
      var validEmail = this.form.current.elements.email.value;

      // data object to be sent in request
      let data = JSON.stringify({
        email_address: validEmail,
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
          console.error(error);
      });
    }
  }

  render() {
    return (
      <div className="subscriberinput">
        <form ref={this.form} className="subscriberinput_form" onSubmit={e => e.preventDefault()}>
          <input
            className="subscriberinput_inputbox"
            id="email"
            type="email"
            placeholder="Add your email for updates!"
            size="25"
            required
          />
        </form>
        <button className="subscriberinput_submitbutton" onClick={this.validateAndSubmit}></button>
      </div>
    );
  }
}

export default SubscriberInpnut;
