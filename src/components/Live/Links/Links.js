import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const links = {
  "slack": "https://join.slack.com/t/cruzhacks-attendees/shared_invite/enQtNTIwODg0MDM2ODM4LTI2OWE4ZTJmMTA0ZmFkMDc5YzY0YjM2OWUyZjFkOWZiMmZlODNkOWZjNTE5YTNkMWM4NWRkNmI4YTMwMDYyMjQ",
  "devpost": "https://cruzhacks-2019.devpost.com/?fbclid=IwAR1uOzD2w4OH3pOZRoCUQQc6-SM8t4Xu5cp7R7a7Dm3cySlFrT55uNM6D1A",
  "hackpack": "https://github.com/CruzHacks/Cruzhacks-Hacker-Packs?fbclid=IwAR345etFOxS-Mn2T1Qx4bjeYoGpkJWThUZ-hQHpwH9KQIoKE_C04TMYnhT0",
  "map": "https://lh5.googleusercontent.com/EMCUpsPn_joa7ihcOw4FtckwiPr_2WF3pwhVwYeSIBjxWJmobqrFJhxDDtf4rmXrC4rXft693u4jC73k8lji=w2880-h1534-rw",
  "MLH": "http://hackp.ac/mlh",
  "crowdforge": "https://crowdforge.io/hackathons/cruzhacks"
}

class Links extends Component {
  render() {
    return (
        <div className="links-container">
          <a href={links['slack']} target="_blank" className="link__item">Slack</a>
          <a href={links['devpost']} target="_blank" className="link__item">DevPost</a>
          <a href={links['hackpack']} target="_blank" className="link__item">Hack Pack</a>
          <NavLink to="/map" target="_blank" className="link__item">Map</NavLink>
          <a href={links['MLH']} target="_blank" className="link__item">MLH</a>
          <a href={links['crowdforge']} target="_blank" className="link__item">Crowd Forge</a>
          <Link to="/#FAQ" className="link__item">FAQ</Link>
        </div>
    );
  }
}

export default Links;
