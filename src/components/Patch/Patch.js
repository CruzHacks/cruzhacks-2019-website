import React, {Component} from 'react';
import logo from 'assets/logo.svg';
import {NavLink} from 'react-router-dom';;

class Patch extends Component {
  constructor(props) {
      super(props)
      this.state = {
        email: '',
        resumeName: ''
      }
  }

  resumeObj = {}

  handleOnChange = (event) => {
    let newState = {}
    const name = event.target.name
    newState[name] = name === 'age' ? parseInt(event.target.value, 10) : event.target.value
    this.setState(newState)
  }

  handleFileUpload = (event) => {
    this.resumeObj = event.target.files[0]
    let name = event.target.value
    name = name.substr(name.lastIndexOf('\\') + 1)
    this.setState({resumeName: name})
  }

  render() {
    return (
      <div className="application">
        <NavLink to="/"><img src={logo} alt="logo" className="application__logo"/></NavLink>
        <h1 className="application__title">Upload Your Resume</h1>
        <form className="form">
          <div className="form__group">
            <input className="form__group__input" id="email" name="email" type="email" onChange={this.handleOnChange} required/>
            <label className={this.state.email ? "form__group__label" : "inactive form__group__label"} htmlFor="email">Enter Your Email</label>
          </div>
          <div className="form__group">
            <label className="form__group__file" htmlFor="resume">{this.state.resumeName ? this.state.resumeName : "Upload your resume"}</label>
            <input className="form__group__input" style={{visibility: 'hidden', position: 'absolute'}} id="resume" name="resume" type="file" onChange={this.handleFileUpload} maxLength="250"/>
          </div>
          <input className="form__submit" style={{"marginTop": "6rem"}}type="submit" value="Submit Application"/>
        </form>
      </div>
    );
  }
}

export default Patch;
