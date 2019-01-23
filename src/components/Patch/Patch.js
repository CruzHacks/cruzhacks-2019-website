import React, {Component} from 'react';
import logo from 'assets/logo.svg';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

import Loader from 'components/Loader';
import Success from 'components/Success';
import Error from 'components/Error';

class Patch extends Component {
  constructor(props) {
      super(props)
      this.state = {
        render: 0,
        email: '',
        resumeName: ''
      }
  }

  resumeObj = null

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

  // enter email -> upload resume -> check if they've got a resume already
  //   -> if so send to success page and do nothing
  //   -> else upload to s3 then hit the put endpoint to add their resume

  // const config = {
  //   bucketName: process.env.REACT_APP_AWS_BUCKET_NAME,
  //   region: process.env.REACT_APP_AWS_REGION,
  //   dirName: 'resumes/'.concat(this.state.email),
  //   accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
  //   secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY
  // }
  // S3FileUpload.uploadFile(this.resumeObj, config)
  
  handleSubmit = (event) => {
    event.preventDefault()
    if (!this.resumeObj) {
      window.alert("Upload your resume to continue!");
    } else {
      this.setState({render: 3}, function() {
        axios.get(process.env.REACT_APP_HAS_RESUME_ENDPOINT)
          .then((response) => {
            // if no resume show loader then upload to s3
            console.log(response)
          })
          .catch((error) => {
            // if they have a resume then go to success page
            // if no user with this email then go to error page
            console.log(error)
          })
      })
    }
  }

  renderSwitch = (param) => {
    switch (param) {
      case 0:
        return (<form className="form" onSubmit={this.handleSubmit}>
          <div className="form__group">
            <input className="form__group__input" id="email" name="email" type="email" onChange={this.handleOnChange} required/>
            <label className={this.state.email ? "form__group__label" : "inactive form__group__label"} htmlFor="email">Enter Your Email</label>
          </div>
          <div className="form__group">
            <label className="form__group__file" htmlFor="resume">{this.state.resumeName ? this.state.resumeName : "Upload your resume"}</label>
            <input className="form__group__input" style={{visibility: 'hidden', position: 'absolute'}} id="resume" name="resume" type="file" onChange={this.handleFileUpload} maxLength="250"/>
          </div>
          <input className="form__submit" style={{"marginTop": "6rem"}} type="submit" value="Submit Resume"/>
        </form>)
      case 1: return <Success text="Thanks for uploading your resume!" />
      case 2: return <Error text="Looks like we already have your resume! You can safely ignore this message."/>
      case 3: return <Loader />
      default: return <h1>Error</h1>
    }
  }

  render() {
    return (
      <div className="application">
        <NavLink to="/"><img src={logo} alt="logo" className="application__logo"/></NavLink>
        <h1 className="application__title">Upload Your Resume</h1>
        {this.renderSwitch(this.state.render)}
      </div>
    );
  }
}

export default Patch;
