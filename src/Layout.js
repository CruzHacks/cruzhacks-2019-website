import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
import HttpsRedirect from 'react-https-redirect';

import Landing from 'components/Landing';
import Patch from 'components/Patch';
import Live from 'components/Live';

import 'styles/css/normalize.css';
import 'styles/sass/base.css';

const protecedURI = "/nHoy8MbfnnaeN";

const GlobalStyle = createGlobalStyle`
  #mlh-trust-badge {
    @media(max-width: 600px) {
      display: none !important;
    }
  }
`

const reload = () => {
  window.location = "/slack.html"
}

class Layout extends Component {
  render() {
    return (
      <HttpsRedirect>
        <GlobalStyle />
        <div className="layout">
          <Router>
            <Switch>
              <Route path="/patch" exact component={Patch}/>
              <Route path={protecedURI} exact component={Live}/>
              <Route path="/slack" exact render={() => {
                  reload();
                  return <Landing/>
                }
              }/>
              <Route path="/#FAQ" exact render={() => {
                  
                }
              }/>
              <Route path="/" component={Landing}/>
            </Switch>
          </Router>
        </div>
      </HttpsRedirect>
    );
  }
}

export default Layout;
