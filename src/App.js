import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import CongressionalDistricts from './components/CongressionalDistricts';
import ElectionDates from './components/ElectionDates';
import LeftMenu from './components/LeftMenu';
import LegislativeDistricts from './components/LegislativeDistricts';
import Splash from './components/Splash';
import StateJudicialCandidates from './components/StateJudicialCandidates';
import UsSenate from './components/UsSenate';
import VotingInElections from './components/VotingInElections';
/* eslint-disable */


class App extends Component {

  render() {
    return (
      <div className="App"> 
       <LeftMenu />
        <Router>
          <div>
            <Switch>
              {/* USERS */}
              <Route exact path="/voteaz/" exact render={ () => <Splash /> }></Route>
              <Route path="/voteaz/CongressionalDistricts" exact render={ () => <CongressionalDistricts /> }></Route>
              <Route path="/voteaz/ElectionDates" exact render={ () => <ElectionDates /> }></Route>
              <Route path="/voteaz/LegislativeDistricts" exact render={ () => <LegislativeDistricts /> }></Route>
              <Route path="/voteaz/StateJudicialCandidates" exact render={ () => <StateJudicialCandidates /> }></Route>
              <Route path="/voteaz/UsSenate" exact render={ () => <UsSenate /> }></Route>
              <Route path="/voteaz/VotingInElections" exact render={ () => <VotingInElections /> }></Route>
              <Route component={Splash} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;


