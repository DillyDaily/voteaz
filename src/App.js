import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import CongressionalDistricts from './components/CongressionalDistricts';
import ElectionDates from './components/ElectionDates';
import LeftMenu from './components/LeftMenu';
// import LegislativeDistricts from './components/LegislativeDistricts';
import Splash from './components/Splash';
import StateJudicialCandidates from './components/StateJudicialCandidates';
import UsSenate from './components/UsSenate';
import VotingInElections from './components/VotingInElections';
/* eslint-disable */
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import LdPage from './components/LdPage';

export default function App() {
    return (
      <div className="App"> 
       <LeftMenu />
       {/* <CssBaseline /> */}
          <Container maxWidth="md">
            <Switch>
              <Route exact path="/" component={ Splash }/>
              <Route path="/CongressionalDistricts" component={ CongressionalDistricts }/>
              <Route path="/ElectionDates" component={ ElectionDates }/>
              <Route path="/LegislativeDistricts" component={ LdPage }/>
              <Route path="/StateJudicialCandidates" component={ StateJudicialCandidates }/>
              <Route path="/UsSenate" component={ UsSenate }/>
              <Route path="/VotingInElections" component={ VotingInElections }/>
            </Switch>
          </Container>
      </div>
    );
  }

