import React, { Component } from 'react';
import OnVisible, { setDefaultProps } from 'react-on-visible';

import Icon from 'components/Icon'

setDefaultProps({
    visibleClassName: 'appear',
    bounce: true,
    percent: 40
});

class WinnerHighlight extends Component {
  render() {
    return (
      <div className="winnerhighlight">
        <img className="winnerhighlight__photo" src={this.props.winners.photo.url} alt={this.props.winners.photo.alt} />
          <div className="winnerhighlight__team">
          {this.props.winners.info.map(winner => (
            <div className="winnerhighlight__team__member">
              <img className="winnerhighlight__team__member__photo" src={winner.photo}/>
              <div className="winnerhighlight__team__member__name">{winner.name}</div>
              <div className="winnerhighlight__team__member__contact">
                <a href={winner.linkedin} target="_blank"><Icon icon={`linkedin`} size={`16`} color={`bdbcc3`} alt={`LinkedIn icon`} /></a>
              </div>
            </div>
          ))}
          </div>
      </div>
    )
  }

  static defaultProps = {
    winners: {
      photo: {
        url: 'https://lh3.googleusercontent.com/NB3L2iPUwy-gPEePQV-c3pFtAMPEkBuX5vpz4AkpwHsnhBk4hGq9Vioggsg7bSrHSs8MU1kamMIDo5lnx6CRBy-Dkh6ErbQWON6BcNPfATPH18dPgGcv39umuIjxXDdeuvZUlVoqaS-v8mOSOScm_o7xjVMRs3shLfhY9ZkrKesBNy97qF071Ye0-wEOYgGO8Xw4r7h1lJHFSTTlQ4jXiHK7FR8KNN9MnrW0pxNbfyXxqsnxOCgFJzjhGbiAddB-MOiECb5frxSpDtGoR8sJCyyLXsH7l3-7TBsBrXQ5j8Vy1F_2l3HOGLFVfnBTSrFy0rP49RKsStStx8NL0kQAVhFz32rhyIpEw8SNsQGZN-gU2wUZnJ0lRfc_acs9JGLfzoLbwSaxra3R2klGs6k4edVKVT1n9waeljpThaOnWtvW9ouf8m8PePwnCWarjjPr1X1sc-Ya5c0F5kot8U6FobEH3cQ4qGjNzDrLz1kCHdmmH754zMkisaLopepFkIv1F8v7Kv2-OWN4Iix-6Jsr4gPdha-BRgFdaL1B4weVmzNc9t_YQeYuDRsOv5fDiTqFCbsIq8P_sFCb-xbuy0_O4umyOx923qYuVrYOT4g=w2880-h1532',
        alt: 'CruzHacks team of 5 members'
      },
      info: [{
        name: 'John Doe',
        email: 'johndoe@example.com',
        linkedin: 'https://linkedin.com/in/johndoe',
        photo: 'https://www.fakepersongenerator.com/Face/male/male20161086465302704.jpg',
      }, {
        name: 'John Doe',
        email: 'johndoe@example.com',
        linkedin: 'https://linkedin.com/in/johndoe',
        photo: 'https://www.fakepersongenerator.com/Face/female/female20171026061954010.jpg',
      }, {
        name: 'John Doe',
        email: 'johndoe@example.com',
        linkedin: 'https://linkedin.com/in/johndoe',
        photo: 'https://www.fakepersongenerator.com/Face/female/female20171026061954010.jpg',
      }]
    }
  }
}

export default WinnerHighlight;
