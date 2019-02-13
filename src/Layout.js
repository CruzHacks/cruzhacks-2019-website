import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
import HttpsRedirect from 'react-https-redirect';

import Landing from 'components/Landing';
import Patch from 'components/Patch';
import Live from 'components/Live';
import Login from 'components/Login';
import PostLanding from 'components/PostLanding';

import 'styles/css/normalize.css';
import 'styles/sass/base.css';

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

const reloadMap = () => {
  window.location = "/map.png"
}

class Layout extends Component {
  render() {
    return (
    
    
        <div className="layout">
          <Router>
            <Switch>
              <Route path="/patch" exact component={Patch}/>
              <Route path="/login" exact component={Login}/>
              <Route path="/map" exact render={() => {
                  reloadMap();
                  return <Landing/>
                }
              }/>
              <Route path="/slack" exact render={() => {
                  reload();
                  return <Landing/>
                }
              }/>
              <Route path="/#FAQ" exact render={() => {
                  
                }
              }/>
              <Route path="/live" exact component={Live}/>
              <Route path="/thankyou" exact render={(props) => <PostLanding {...props} sponsor/>}/>
              <Route path="/" component={Landing}/>
            </Switch>
          </Router>
        </div>
    );
  }
}

export default Layout;
