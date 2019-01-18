import React, {Component} from 'react';

import logo from 'assets/logo.svg';
import instagram from 'assets/social/instagram.svg';
import facebook from 'assets/social/facebook.svg';
import twitter from 'assets/social/twitter.svg';

import Announcements from './Announcements';
import Links from './Links';
import Schedule from './Schedule';

class Live extends Component {
  render() {
    return (
        <div className="live-hero">
            <img className="live-hero__logo" src={logo} alt="logo"/>
            <h1 className="live-hero__title">CruzHacks 2019</h1>
            <div className="live-hero__social">
                <a href="https://www.instagram.com/cruzhacks/" target="_blank"><img src={instagram} alt=""/></a>
                <a href="https://facebook.com/CruzHacks/" target="_blank"><img src={facebook} alt=""/></a>
                <a href="https://twitter.com/CruzHacks" target="_blank"><img src={twitter} alt=""/></a>
            </div>
            <Links />
            <Announcements />
            <Schedule />
        </div>
    );
  }
}

export default Live;
