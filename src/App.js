import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Profile from "./pages/templates/profile";
import Home from "./pages/home";
import Api from "./pages/api/api";
import Youtube from "./pages/templates/youtube/youtube";
import Random from "./pages/templates/random/random";
import Cafe from "./pages/templates/cafe/cafe";
import LandingPage from "./pages/templates/landingPage/landingPage";
import WebBuilder from './pages/webBuilder/webBulider';
import Connect from './pages/templates/connect/connect' ;


function App() {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/api">
              <Api />
            </Route>
            <Route path="/profile/:id" children={<Profile />} />
            <Route path="/youtube/:id" children={<Youtube />} />

            <Route path="/random/:id" children={<Random />} />
            <Route path="/cafe/:id" children={<Cafe />} />
            <Route path="/landinPage/:id" children={<LandingPage />} />
            <Route path="/webbuilder/" children={<WebBuilder/>} />
            <Route path="/connect/:id" children={< Connect />}  />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
