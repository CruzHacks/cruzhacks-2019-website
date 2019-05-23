import React, { Component } from "react";
import axios from "axios";
import { OauthSender } from 'react-oauth-flow';
import OnVisible, { setDefaultProps } from "react-on-visible";

setDefaultProps({
  visibleClassName: "appear",
  bounce: true,
  percent: 50
});

class SubscribeMailingList extends Component {
  constructor() {
    super();
    this.form = React.createRef();
    this.validateAndSubmit = this.validateAndSubmit.bind(this);
  }

  //
  // data: { "email_address":validEmail },

  validateAndSubmit() {
    if (this.form.current.reportValidity()) {
      console.error(this.form.current.elements.email.value);
      var validEmail = this.form.current.elements.email.value;

      axios.post('https://us17.api.mailchimp.com/3.0/lists/8436398b32/members', 
      {
        auth: {
          username: process.env.REACT_APP_MAILCHIMP_USER,
          password: process.env.REACT_APP_MAILCHIMPSECRET
        }
      }).then(response => {
        console.error("Here's the response : " + response);
        //this.setState({email: '', subscribe: "You've Been Subscribed!"})
      }).catch(error => {
        console.error("An error occurred : " + error);
        //this.setState({email: '', subscribe: "You've Been Subscribed!"})
      });
    }
  }

  render() {
    return (
      <div className="subscribemailinglist__container">
        <form ref={this.form} onSubmit={e => e.preventDefault()}>
          <input
            id="email"
            type="email"
            placeholder="valid email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
        </form>
        <button onClick={this.validateAndSubmit}>Subscribe</button>
      </div>
    );
  }
}

export default SubscribeMailingList;
