import React, { Component } from 'react';
import OnVisible, { setDefaultProps } from 'react-on-visible';

setDefaultProps({
    visibleClassName: 'appear',
    bounce: true,
    percent: 50
});

class ProjectHighlight extends Component {
  render() {
    return (
      <OnVisible wrappingElement="a"  className="projecthighlight" href={this.props.project.link} target="_blank">
          <img className="projecthighlight__image" src={this.props.project.photo.url} alt={this.props.project.photo.alt} />
          <div className="projecthighlight__body">
            <div className="projecthighlight__body__name">{this.props.project.name}</div>
            <div className="projecthighlight__body__description">{this.props.project.description}</div>
          </div>
      </OnVisible>
    )
  }

  static defaultProps = {
    project: {
      name: 'Example project',
      description: 'We used an Example API to pull data through the blockchain and validate things for the users',
      link: 'https://devpost.com/software/test',
      photo: {
        url: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/000/746/410/datas/medium.png',
        alt: 'Code Cut Scissors Logo'
      },
    }
  }
}

export default ProjectHighlight;

