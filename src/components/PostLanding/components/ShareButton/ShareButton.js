import React, { Component } from 'react'
import OnVisible, { setDefaultProps } from 'react-on-visible';

import Icon from 'components/Icon'

setDefaultProps({
    visibleClassName: 'appear',
    bounce: true,
    percent: 50
});

class ShareButton extends Component {
  tooltip(e, message, cl, link) {
    let el = document.createElement('div');
    el.classList = "tooltip emailsubmit invisible"
    el.innerHTML = message
    while (cl && !e.className.includes(cl)) e = e.parentElement;
    
    if([...e.children].reduce((open, el) => [...el.classList].includes('tooltip') && (open = true), false)) return
    e.appendChild(el)
    setTimeout(() => el.classList = "tooltip emailsubmit", 200)
    setTimeout(() => el.classList += " invisible", 2000)
    setTimeout(() => e.removeChild(el), 2200)
    if (link) {
      setTimeout(() => Object.assign(
        document.body.appendChild(document.createElement("a")), { href: link }
      ).click(), 1000)
    }
  }
  render() {
    this.props.buttons.forEach(button => button.link ? button.link = button.link.split(`$s`).join(this.props.sponsor) : null)
    return (
      <div className="sharebutton__container">
        {this.props.buttons.map(button => 
          <OnVisible wrappingElement="a" className="sharebutton" href={button.copy ? undefined : (this.props.anonymized ? button.individual : button.link)} onClick={(e) => { if (button.copy) { button.copy(); this.tooltip(e.target, `Link copied!`, `sharebutton`, (this.props.anonymized ? button.individual : button.link))}}} target="_blank"><Icon icon={button.type} alt={`Share on ${button.type}`} /></OnVisible>
        )}
      </div>
    )
  }
  static defaultProps = {
    anonymized: true,
    buttons: [
      {
        type: `link`,
        copy: () => {  
          const el = document.createElement('textarea');
          el.value = window.location.href;
          document.body.appendChild(el);
          el.select();
          document.execCommand('copy');
          document.body.removeChild(el);
        }
      },
      {
        type: `linkedin`,
        link: `https://www.linkedin.com/shareArticle/?mini=true&url=${window.location.href}&title=$s%20Sponsors%20CruzHacks%202019&summary=$s%20is%20proud%20to%20sponsor%20CruzHacks%202019%20a%20nonprofit%20hackathon%20bringing%20together%20600%20students%20from%2040%20universities%20to%20UC%20Santa%20Cruz%20for%20a%20weekend%20of%20building%20software%20projects`,
        individual: `https://www.linkedin.com/shareArticle/?mini=true&url=${window.location.href}&title=CruzHacks%202019&summary=CruzHacks%202019%20is%20a%20nonprofit%20hackathon%20bringing%20together%20600%20students%20from%2040%20universities%20to%20UC%20Santa%20Cruz%20for%20a%20weekend%20of%20building%20software%20projects`
      },
      {
        type: `slack`,
        link: `https://slack.com/signin/find`,
        copy: () => {  
          const el = document.createElement('textarea');
          el.value = window.location.href;
          document.body.appendChild(el);
          el.select();
          document.execCommand('copy');
          document.body.removeChild(el);
        }
      },
      {
        type: `facebook`,
        link: `https://www.facebook.com/dialog/share?app_id=2331092736909025&display=popup&href=${encodeURIComponent(window.location.href)}&hashtag=%23cruzhacks&quote=$s%20is%20proud%20to%20sponsor%20CruzHacks%202019%20a%20nonprofit%20hackathon%20bringing%20together%20600%20students%20from%2040%20universities%20to%20UC%20Santa%20Cruz%20for%20a%20weekend%20of%20building%20software%20projects`,
        individual: `https://www.facebook.com/dialog/share?app_id=2331092736909025&display=popup&href=${encodeURIComponent(window.location.href)}&hashtag=%23cruzhacks&quote=CruzHacks%202019%20is%20a%20nonprofit%20hackathon%20bringing%20together%20600%20students%20from%2040%20universities%20to%20UC%20Santa%20Cruz%20for%20a%20weekend%20of%20building%20software%20projects`
      },
      {
        type: `twitter`,
        link: `https://twitter.com/intent/tweet?text=$s%20is%20proud%20to%20sponsor%20CruzHacks%202019%20a%20nonprofit%20hackathon%20bringing%20together%20600%20students%20from%2040%20universities%20to%20UC%20Santa%20Cruz%20for%20a%20weekend%20of%20building%20software%20projects&url=${window.location.href}`,
        individual: `https://twitter.com/intent/tweet?text=CruzHacks%202019%20is%20a%20nonprofit%20hackathon%20bringing%20together%20600%20students%20from%2040%20universities%20to%20UC%20Santa%20Cruz%20for%20a%20weekend%20of%20building%20software%20projects&url=${window.location.href}`
      },
    ],
    sponsor: ``
  }
}

export default ShareButton;
