import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import logo from 'assets/logo.svg';
import hero from 'assets/hero.svg';

class Hero extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      subscribe: 'Subscribe'
    }
  }

  componentDidMount() {
    this.animateCount(0, 36, "hours");
    this.animateCount(0, 100, "projects");
    this.animateCount(0, 500, "hackers");
  }

  getEmail = (event) => {
    this.setState({email: event.target.value})
  }

  subscribeEmail = (event) => {
    if (!this.state.email) return
    axios.post(process.env.REACT_APP_SUBSCRIBE_ENDPOINT, {
        email: this.state.email
      })
      .then((response) => {
        this.setState({email: '', subscribe: "You've Been Subscribed!"})
      }).catch((error) => {
        console.log(error)
        this.setState({email: '', subscribe: "You've Been Subscribed!"})
      })
  }

  scrollToContent = () => {
    window.scrollTo({
      top: document.querySelector('.mission').offsetTop,
      behavior: 'smooth'
    })
  }

  animateCount(start, end, id) {
    let el = document.getElementById(id)
    let begin = start

    let step = 3000 / Math.abs(end - start);

    function run() {
      begin++
      el.innerHTML = `${begin} ${id}`
      if (begin === end) {
        clearInterval(timer)
        if (id === "hackers" || id === "projects") {
          var plus = String(begin) + "+";
          el.innerHTML = `${plus} ${id}`
        }
      }
    }
    let timer = setInterval(run, step);
    run()
  }

  render() {
    return (
      <div className="hero">
        <img className="hero__logo" src={logo} alt="logo"/>
        <h1 className="hero__title">CruzHacks 2019</h1>
        <span className="hero__text">Create something that makes a difference.</span>
        <span className="hero__text__alt">Jan 18-20, 2019 @ <a className="hero__link" href="https://goo.gl/maps/2gdMzVKgkv92" target="_blank" rel="noopener noreferrer">Stevenson Event Center</a></span>
        <div className="hero__button-container">
          <NavLink to="/apply" className="hero__button__cta hero__button">Apply!</NavLink>
          <a href="/Sponsorship_Packet_E.pdf" className="hero__button" target="_blank" rel="noopener noreferrer">Sponsoring?</a>
        </div>
        <div className="hero__stats">
          <span id="hackers" className="hero__stats__item">500+ hackers</span>
          <span id="projects" className="hero__stats__item">100+ projects</span>
          <span id="hours" className="hero__stats__item">36 Hours</span>
        </div>
        <span className="hero__tiny" onClick={this.scrollToContent}>Learn More!</span>
        <img src={hero} alt="" className="hero__bg"/>
      </div>
    );
  }
}

export default Hero;
