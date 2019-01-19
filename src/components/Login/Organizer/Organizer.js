import React, { Component } from 'react';

class Organizer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
  }

  handleOnChange = (event) => {
    let newState = {}
    const name = event.target.name
    newState[name] = event.target.value
    this.setState(newState, function() {
      console.log(newState)
    })
  }
  /* 
  `https://cruzhacks2019-registration-stg.herokuapp.com/announcements` POST/DELETE, takes uid, token, title, post_date, and message (optional) as parameters

  */

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)
  }

  render() {
    return (
      <div className="organizer-form">
        <form className="form" onSubmit={this.handleSubmit}>
            <div className="form__group">
              <input className="form__group__input" id="title" name="title" type="text" onChange={this.handleOnChange} value={this.state.title} maxLength="20" required/>
              <label className={this.state.title ? "form__group__label" : "inactive form__group__label"} htmlFor="title">Title</label>
            </div>
            <div className="form__group">
              <input className="form__group__input" id="password" name="password" type="password" onChange={this.handleOnChange} value={this.state.password} maxLength="20" required/>
              <label className={this.state.password ? "form__group__label" : "inactive form__group__label"} htmlFor="password">Password*</label>
            </div>              
            <input className="form__submit" type="submit" value="Login"/>
          </form>
      </div>
    );
  }
}

export default Organizer;
