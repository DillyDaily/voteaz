import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ElectionDates from './ElectionDates';
import VotingInElections from './VotingInElections';

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
    <div>
      <h1>Let's vote!</h1>
      <h2>Arizona Election / Voting Resources </h2>
      <p>Election content curated by Gus Miranda</p>
      <Grid container className={classes.root} spacing={1}>
        <Grid item xs={12}>
          
        </Grid>
        <ElectionDates />
        <VotingInElections />
      </Grid>
    </div>
  );
}

export default Splash;