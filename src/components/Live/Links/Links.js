import React, {Component} from 'react';

class Links extends Component {
  render() {
    return (
        <div className="links-container">
          <a href="#" target="_blank" className="link__item">Slack</a>
          <a href="#" target="_blank" className="link__item">DevPost</a>
          <a href="#" target="_blank" className="link__item">Hack Pack</a>
          <a href="#" target="_blank" className="link__item">Map</a>
          <a href="#" target="_blank" className="link__item">MLH</a>
          <a href="#" target="_blank" className="link__item">Crowd Forge</a>
        </div>
    );
  }
}

export default Links;
