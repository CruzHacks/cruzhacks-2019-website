import React, { Component } from 'react';
import OnVisible, { setDefaultProps } from 'react-on-visible';

setDefaultProps({
    visibleClassName: 'appear',
    bounce: true,
    percent: 50
});

class MediaButtons extends Component {
  render() {
    return (
      <div className="mediabuttons">
        {this.props.media.map(media => (
          <OnVisible wrappingElement="a" href={media.link} target="_blank" className="mediabuttons__media">
            <div className="mediabuttons__media__image"><img src={media.image} alt={media.alt}/></div>
            <div className="mediabuttons__media__body">
              <div className="mediabuttons__media__body__name">{media.name}</div>
              <div className="mediabuttons__media__body__source">{media.source}</div>
            </div>
          </OnVisible>
        ))}
      </div>
    )
  }
  static defaultProps = {
    media: [
      {
        name: `Example Title`,
        source: `Editorial Weekly`,
        link: `https://example.com`,
        image: `https://blog.productops.com/content/images/2019/01/image--2--2.png`,
        alt: `Sample alt`,
      },
      {
        name: `Example Title`,
        source: `Editorial Weekly`,
        link: `https://example.com`,
        image: `https://i2.wp.com/www.santacruztechbeat.com/wp-content/uploads/2019/01/CruzHackssteve.png?resize=800%2C686`,
        alt: `Sample alt`,
      },
      {
        name: `Example Title`,
        source: `Editorial Weekly`,
        link: `https://example.com`,
        image: `https://www.santacruzsentinel.com/wp-content/uploads/2019/02/IMG_1073.jpg?w=707`,
        alt: `Sample alt`,
      }
    ]
  }
}

export default MediaButtons;
