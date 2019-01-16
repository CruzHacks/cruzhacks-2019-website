import React, {Component} from 'react';
import axios from 'axios';

import Loader from 'components/Loader';
import Success from 'components/Success';
import Error from 'components/Error';

import TShirtSelect from '../TShirtSelect';
import Availability from './Availability';

class JudgeForm extends Component {

  initialState = {
    status: 0,
    first_name: '',
    last_name: '',
    email: '',
    company: '',
    linkedin: '',
    shirt_size: '',
    short_answer1: '',
    available: '',
    dietary_rest: '',
  }

  constructor(props) {
    super(props)
    this.state = this.initialState
  }

  handleOnChange = (event) => {
    let newState = {}
    newState[event.target.name] = event.target.value
    this.setState(newState)
  }

  grabState = (state) => {
    this.setState(state)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.shirt_size === '') {
      window.alert("Please select a shirt size!")
    } else if (this.state.available === '') {
      window.alert("Please select your availability")
    }else {
      this.setState({status: 1}, () => {
        axios({
          method: 'post',
          url: process.env.REACT_APP_REGISTRATION_ENDPOINT.concat('/judge'),
          data: {
            email: this.state.email,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            company: this.state.company,
            linkedin: this.state.linkedin,
            shirt_size: this.state.shirt_size,
            short_answer1: this.state.short_answer1,
            available: this.state.available,
            dietary_rest: this.state.dietary_rest
          }
        }).then((response) => {
          this.setState({status: 2})
        }).catch((error) => {
          this.setState({status: 3})
        });
      })
    }
  }

  render() {
    switch (this.state.status) {
      case 1: return <Loader />
      case 2: return <Success text="Thanks for applying! We've received your application and will get back to you as soon as we can."/>
      case 3: return <Error text="Oops! There was an error submitting your application. If you think this was a mistake please get in touch with us at contact@cruzhacks.com!"/>
      default: {
        return (
          <div className="form-container">
            <h2 className="form-container__title">Judge Application</h2>
            <p className="form-container__text">
              <span>Judges will arrive at the <a className="form-container__link" href="https://goo.gl/maps/2gdMzVKgkv92" target="_blank" rel="noopener noreferrer">Stevenson Event Center</a> at UCSC @ 10 am and be served lunch from a tasty location.  Each judge will be assigned projects to evaluate from 11:30 - 1 pm, and then the final results will be announced in the closing ceremony from 1:30 - 3:00 pm. </span>
            </p>
            <form className="form" onSubmit={this.handleSubmit}>
              <div className="form__group">
                <input className="form__group__input" id="first_name" name="first_name" type="text" onChange={this.handleOnChange} value={this.state.first_name} required/>
                <label className={this.state.first_name ? "form__group__label" : "inactive form__group__label"} htmlFor="first_name">Firstname*</label>
              </div>
              <div className="form__group">
                <input className="form__group__input" id="last_name" name="last_name" type="text" onChange={this.handleOnChange} value={this.state.last_name} required/>
                <label className={this.state.last_name ? "form__group__label" : "inactive form__group__label"} htmlFor="last_name">Lastname*</label>
              </div>
              <div className="form__group">
                <input className="form__group__input" id="email" name="email" type="email" onChange={this.handleOnChange} value={this.state.email} required/>
                <label className={this.state.email ? "form__group__label" : "inactive form__group__label"} htmlFor="email">Email*</label>
              </div>
              <div className="form__group">
                <input className="form__group__input" id="company" name="company" type="tel" onChange={this.handleOnChange} value={this.state.company} required/>
                <label className={this.state.company ? "form__group__label" : "inactive form__group__label"} htmlFor="company">What company do you work for?*</label>
              </div>
              <div className="form__group">
                <input className="form__group__input" id="linkedin" name="linkedin" type="text" onChange={this.handleOnChange} value={this.state.linkedin} required/>
                <label className={this.state.linkedin ? "form__group__label" : "inactive form__group__label"} htmlFor="linkedin">LinkedIn URL</label>
              </div>
              <div className="form__group">
                <textarea rows="5" cols="50" className="form__group__textarea" id="short_answer1" name="short_answer1" type="text" onChange={this.handleOnChange} value={this.state.short_answer1} required/>
                <label className={this.state.short_answer1 ? "form__group__label" : "inactive form__group__label"} htmlFor="short_answer1">Why do you want to be a judge CruzHacks 2019? </label>
                <span className="form__group__charcount">Character count: {this.state.short_answer1.length}</span>
              </div>
              <div className="form__group">
                <input className="form__group__input" id="dietary_rest" name="dietary_rest" type="text" onChange={this.handleOnChange} value={this.state.dietary_rest} required/>
                <label className={this.state.dietary_rest ? "form__group__label" : "inactive form__group__label"} htmlFor="dietary_rest">Please list any dietary restrictions you have.</label>
              </div>
              <Availability handler={this.grabState} />
              <TShirtSelect handler={this.grabState} />
              <input className="form__submit" type="submit" value="Submit Application"/>
            </form>
          </div>
        );
      }
    }
  }
}

export default JudgeForm;
