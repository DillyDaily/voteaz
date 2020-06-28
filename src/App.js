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
              <Route exact path="/voteaz/" component={ Splash }/>
              <Route exact path="/voteaz/CongressionalDistricts" component={ CongressionalDistricts }/>
              <Route exact path="/voteaz/ElectionDates" component={ ElectionDates }/>
              <Route exact path="/voteaz/LegislativeDistricts" component={ LegislativeDistricts }/>
              <Route exact path="/voteaz/StateJudicialCandidates" component={ StateJudicialCandidates }/>
              <Route exact path="/voteaz/UsSenate" component={ UsSenate }/>
              <Route exact path="/voteaz/VotingInElections" component={ VotingInElections }/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;


