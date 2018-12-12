import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
import HttpsRedirect from 'react-https-redirect';
import OgImage from 'assets/ogimage.png';
import Favicon from 'assets/favicon.png';

import Landing from 'components/Landing';
import Application from 'components/Application';

import 'styles/css/normalize.css';
import 'styles/sass/base.css';

const GlobalStyle = createGlobalStyle`
  #mlh-trust-badge {
    @media(max-width: 600px) {
      display: none !important;
    }
  }
`

class Layout extends Component {
  render() {
    return (
      <HttpsRedirect>
        <Helmet
        defaultTitle="CruzHacks 2019"
        meta={[
          { name: 'description', 
            content: 'CruzHacks brings together a diverse and inclusive group of students and professionals to develop innovative solutions to solve real world challenges.' },
          { name: 'keywords', 
            content: 'uc santa cruz hackathon, student hackathon, hackathon in santa cruz, ucsc hackathon, hack ucsc, 2019 hackathon mlh, ucsc 2019 computer science, ucsc software engineering' },
          { prefix: "og: http://ogp.me/ns#", property: 'og:title', content: 'CruzHacks 2019' },
          { prefix: "og: http://ogp.me/ns#", property: 'og:description', content: 'CruzHacks brings together a diverse and inclusive group of students and professionals to develop innovative solutions to solve real world challenges.' },
          { prefix: "og: http://ogp.me/ns#", property: 'og:type', content: 'website' },
          { prefix: "og: http://ogp.me/ns#", property: 'og:image', content: 'http://cruzhacks.com' + OgImage },
          { prefix: "og: http://ogp.me/ns#", property: 'og:image:secure_url', content: 'https://cruzhacks.com' + OgImage },
          { prefix: "og: http://ogp.me/ns#", property: 'og:url', content: 'http://cruzhacks.com/' },
        ]}
        link={[
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: Favicon
          }
        ]}
      />
      <GlobalStyle />
        <div className="layout">
          <Router>
            <Switch>
              <Route path="/apply" exact component={Application}/>
              <Route path="/" component={Landing}/>
            </Switch>
          </Router>
        </div>
      </HttpsRedirect>
    );
  }
}

export default Layout;
