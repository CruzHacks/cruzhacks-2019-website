import React, { Component } from 'react';

import logo from 'assets/logo.svg';

class Login extends Component {
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

  render() {
    return (
      <div className="login">
      <img src={logo} alt=""/>
      <h1>Organizer Login</h1>
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
      </div>
    );
  }
}

export default Login;
