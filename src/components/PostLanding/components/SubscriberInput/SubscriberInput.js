import React, { Component } from "react";
import axios from "axios";
import OnVisible, { setDefaultProps } from "react-on-visible";
import { ReCaptcha } from 'react-recaptcha-v3'

setDefaultProps({
  visibleClassName: "appear",
  bounce: true,
  percent: 50
});

class SubscriberInput extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.state = {email: '', message: 'default'}
    this.validateAndSubmit = this.validateAndSubmit.bind(this)
  }

  getEmail = (email) => {
    this.setState({email: email.target.value})
    email.preventDefault()
  }

  tooltip(e, message) {
    console.log(e)
    let el = document.createElement('div');
    // making the text white for testing, still haven't figured out the styling
    // for the tooltip yet

    el.classList = "tooltip emailsubmit invisible"
    el.innerHTML = message
    
    if([...e.children].reduce((open, el) => [...el.classList].includes('tooltip') && (open = true), false)) return
    e.appendChild(el)
    setTimeout(() => el.classList = "tooltip emailsubmit", 200)
    setTimeout(() => el.classList += " invisible", 2000)
    setTimeout(() => e.removeChild(el), 2200)
  }

  async validateAndSubmit(target) {
    if (this.form.current.reportValidity()) {
      // data object to be sent in request
      let data = JSON.stringify({
        email_address: this.state.email,
        status: 'subscribed'
      });

      // basic auth username and password
      var uname = process.env.REACT_APP_MAILCHIMP_USER
      var key = process.env.REACT_APP_MAILCHIMP_SECRET
      var err_msg
      
      await axios.post(process.env.REACT_APP_MAILCHIMP_SUBSCRIBERS_ENDPOINT, data, {
        auth: {
          username: uname,
          password: key
        },
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(response => {
        err_msg = 'Watch out for our emails!'
        this.setState({message: err_msg})
        this.tooltip(target, this.state.message, "subscriberinput_submitbutton")
        console.log(response)
      }).catch(error => {
        if (error.response) {
          console.log(error.response)
          if (error.response.data.title === "Member Exists") {
            err_msg = 'Already Subscribed!'
            this.setState({message: err_msg})
            this.tooltip(target, this.state.message, "subscriberinput_submitbutton")
          }
        } else {
          err_msg = 'Something Went Wrong'
          this.setState({message: err_msg})
          this.tooltip(target, this.state.message, "subscriberinput_submitbutton")
          console.log(error)
        }
      });
    }
  }

  render() {
    return (
      <OnVisible className="subscriberinput">
        <form ref={this.form} id="emailform" className="subscriberinput__form" onSubmit={e => e.preventDefault()}>
           <div className="subscriberinput__container">
           <ReCaptcha
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                action='subscribe'
              /> 
            <input
              className={this.state.email ? "subscriberinput__container_inputboxfilled" : "subscriberinput__container_inputbox"}
              id="email"
              type="email"
              onChange={this.getEmail}
              value={this.state.email}
              required
            /> <span className="subscriberinput__container_underline"></span>
            <label className={this.state.email ? 'subscriberinput__container_labelhidden' : 'subscriberinput__container_label'} for="email">
              Drop an email for updates!
            </label>
          </div>
        </form>
        <button 
          type="submit" 
          className="subscriberinput__container_submitbutton"
          onClick={ (e) => { this.validateAndSubmit(e.target); }}
          form="emailform"
        >
        </button>
      </OnVisible>
    );
  }
}

export default SubscriberInput;
