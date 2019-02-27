import React, { Component } from 'react';

import Hero from "components/Landing/Hero";
import ColumnStats from "components/PostLanding/components/ColumnStats"
import Collage from "components/PostLanding/components/Collage"
import DisplayText from "components/PostLanding/components/DisplayText"
import BigStat from "components/PostLanding/components/BigStat"
import ColumnButtons from "components/PostLanding/components/ColumnButtons"
import WinnerHighlight from "components/PostLanding/components/WinnerHighlight"
import ProjectHighlight from "components/PostLanding/components/ProjectHighlight"
import ShareButton from "components/PostLanding/components/ShareButton"
import DonationCTA from "components/PostLanding/components/DonationCTA"
import MediaButtons from "components/PostLanding/components/MediaButtons"

class PostLanding extends Component {
  render() {
    let componentImport = c => ({
      "Hero": <Hero {...c.props} />,
      "DisplayText": <DisplayText {...c.props} />,
      "ColumnStats": <ColumnStats {...c.props} />,
      "Collage": <Collage {...c.props} />,
      "BigStat": <BigStat {...c.props} />,
      "ColumnButtons": <ColumnButtons {...c.props} />,
      "WinnerHighlight": <WinnerHighlight {...c.props} />,
      "ProjectHighlight": <ProjectHighlight {...c.props} />,
      "ShareButton": <ShareButton {...c.props} />,
      "DonationCTA" : <DonationCTA {...c.props} />,
      "MediaButtons": <MediaButtons {...c.props} />
    })[c.name]
    return (
      <div className="postlanding">
        {this.props.data.slice(0,1).map(c => componentImport(c))}
        <div className="postlanding__container">
          {this.props.data.slice(1).map(c => componentImport(c))}
        </div>
      </div>
    );
  }
  static defaultProps = {
    data: [{
      name: `Hero`,
      props: {
        minimal: true,
      }
    },
    {
      name: `DisplayText`,
      props: {
        header: `404 Page Not Found`,
        paragraph: `This isn't a real postlanding page.`
      }
    }]
  }
}

export default PostLanding;
