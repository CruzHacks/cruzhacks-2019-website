import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
import HttpsRedirect from 'react-https-redirect';

import Landing from 'components/Landing';
import Patch from 'components/Patch';
import Live from 'components/Live';
import Login from 'components/Login';
import PostLanding from 'components/PostLanding';

import sponsorData from 'sponsorData'
import generalTemplate from 'generalTemplate'
import sponsorTemplate from 'components/PostLanding/components/sponsorTemplate'

import 'styles/css/normalize.css';
import 'styles/sass/base.css';

const uuidv5 = require('uuid/v5');
const uuid = require('uuid');


const GlobalStyle = createGlobalStyle`
  #mlh-trust-badge {
    @media(max-width: 900px) {
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
      <HttpsRedirect>
        <GlobalStyle />
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
              {/* {sponsorData.map(el => <Route path={`/${uuidv5(String(process.env.REACT_APP_SECRET_TOKEN),el.name)}/${el.name}`} exact render={() => <PostLanding data={sponsorTemplate(el).filter(e => e)}/>}/> )} */}
              <Route path={`/thankyou`} exact render={() => <PostLanding data={generalTemplate} />}/>
              <Route path="/" render={() => <PostLanding data={generalTemplate} />}/>
              {/* <Route path="/" component={Landing}/> */}
            </Switch>
          </Router>
        </div>
      </HttpsRedirect>
    );
  }
}

export default Layout;
