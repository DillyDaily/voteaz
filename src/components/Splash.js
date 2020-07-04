import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ElectionDates from './ElectionDates';
import VotingInElections from './VotingInElections';
import LegislativeDistricts from './LegislativeDistricts';
import StateJudicialCandidates from './StateJudicialCandidates';
import CongressionalDistricts from './CongressionalDistricts';
import USsenate from './UsSenate';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(2),
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const Splash = () => {
  
  const [spacing, setSpacing] = React.useState(6);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <div className="Splash">
      <div >
        <h1>Let's vote!</h1>
        <h2>Arizona Election / Voting Resources </h2>
        <p>Election content curated by Gus Miranda</p>
      </div>
        <Grid container className={classes.root} spacing={1}>
          <ElectionDates />
          <VotingInElections />
          <StateJudicialCandidates />
          <LegislativeDistricts />
          <CongressionalDistricts />
          <USsenate />
        </Grid>
    </div>
  );
}

export default Splash;