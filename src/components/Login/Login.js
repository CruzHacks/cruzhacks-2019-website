import React, { Component } from 'react';

import logo from 'assets/logo.svg';

import Loader from 'components/Loader';
import Organizer from './Organizer'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      status: 3
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

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)
  }

  renderTitle = () => {
    switch(this.state.status) {
      case 1: return <h1>Organizer Announcement Form</h1>
      case 2: return <h1>Director Announcement Forms</h1>
      default: return <h1>Organizer Log In</h1>
    }
  }

  renderComponent = () => {
    switch (this.state.status) {
      case 0: return <Loader />
      case 1: return <Organizer/>
      case 2: return (<h1>Logged In Director</h1>)
      default: return (
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form__group">
              <input className="form__group__input" id="username" name="username" type="text" onChange={this.handleOnChange} value={this.state.username} maxLength="20" required/>
              <label className={this.state.username ? "form__group__label" : "inactive form__group__label"} htmlFor="username">Username</label>
            </div>
            <div className="form__group">
              <input className="form__group__input" id="password" name="password" type="password" onChange={this.handleOnChange} value={this.state.password} maxLength="20" required/>
              <label className={this.state.password ? "form__group__label" : "inactive form__group__label"} htmlFor="password">Password*</label>
            </div>              
            <input className="form__submit" type="submit" value="Login"/>
          </form>
      );
    }
  }

  render() {
    return (
      <div className="login">
        <img src={logo} alt=""/>
        <h1>{this.renderTitle()}</h1>
        {this.renderComponent()}
      </div>
    );
  }
}

export default Login;
