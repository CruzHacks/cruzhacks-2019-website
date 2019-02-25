import React, {Component} from 'react';
import axios from 'axios';

import Icon from 'components/Icon'
import logo from 'assets/logo.svg';
import heroLive from 'assets/hero-live.svg';
import instagram from 'assets/social/instagram.svg';
import facebook from 'assets/social/facebook.svg';
import twitter from 'assets/social/twitter.svg';

class Hero extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      subscribe: 'Subscribe',
    }
  }

  componentDidMount() {
    if (!this.props.minimal) {
      this.animateCount(0, 36, "hours");
      this.animateCount(0, 100, "projects");
      this.animateCount(0, 500, "hackers");
    }
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

    let step = 2250 / Math.abs(end - start);

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
        <img className="live-hero__left" src={heroLive} alt=""/>
        <img className="live-hero__right" src={heroLive} alt=""/>
        <div className="hero__background">
          <img className="hero__logo" src={logo} alt="logo"/>
          {this.props.minimal && <div className="hero__logo--collab">
            <Icon icon={`plus`} />
          </div>}
          <img className="hero__logo--sponsor" src={this.props.sponsorLogo} />
          <h1 className="hero__title">CruzHacks 2019</h1>
          {this.props.sponsorLogo ? <span className="hero__text">{this.props.sponsorName} sponsorship fulfillment review<br/>Prepared by the CruzHacks team</span> : <span className="hero__text">Create something that makes a difference.</span>}
          {!this.props.minimal &&  <div>
            <span className="hero__text__alt">Jan 18-20, 2019 @ <a className="hero__link" href="https://goo.gl/maps/2gdMzVKgkv92" target="_blank" rel="noopener noreferrer">Stevenson Event Center</a></span>
            <div className="live-hero__social">
              <a rel="noopener noreferrer" href="https://www.instagram.com/cruzhacks/" target="_blank"><img src={instagram} alt=""/></a>
              <a rel="noopener noreferrer" href="https://facebook.com/CruzHacks/" target="_blank"><img src={facebook} alt=""/></a>
              <a rel="noopener noreferrer" href="https://twitter.com/CruzHacks" target="_blank"><img src={twitter} alt=""/></a>
            </div>
          <div className="hero__button-container">
            <a href="https://cruzhacks-2019.devpost.com/submissions" className="hero__button hero__button__cta orange" target="_blank" rel="noopener noreferrer">View Winners</a>
            <a href="mailto:sponsor@cruzhacks.com" className="hero__button hero__button__cta green" target="_blank">Sponsorship Inquiries</a>
            <a href="https://flic.kr/s/aHskMHm9Z8" className="hero__button hero__button__cta" target="_blank" rel="noopener noreferrer">Event Photos</a>
          </div>
          <div className="hero__stats">
            <span id="hackers" className="hero__stats__item">500+ hackers</span>
            <span id="projects" className="hero__stats__item">100+ projects</span>
            <span id="hours" className="hero__stats__item">36 Hours</span>
          </div>
          <span className="hero__tiny" onClick={this.scrollToContent}>Learn More!</span></div>}
        </div>
      </div>
    );
  }
}

export default Hero;
