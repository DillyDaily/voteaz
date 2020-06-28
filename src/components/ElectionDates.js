import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(2),
    },
    control: {
      padding: theme.spacing(2),
    },
  }));
  

const ElectionDates = () => {

const [spacing, setSpacing] = React.useState(6);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
    return (
        <Grid container className={classes.root} spacing={1}>
                <h2>
                    <a
                        className="App-link"
                        href="https://recorder.maricopa.gov/elections/electioncalendar.aspx"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Election Dates
                    </a>
                </h2>
                    <Grid item xs={12}>
                        <Grid container justify="left" spacing={spacing}>
                        {/* {[0, 1, 2].map((value) => ( */}
                            <Grid key={0} item>
                            <Paper className={classes.paper}>
                                <h3>Election Date</h3>
                                <h4>Primary Election</h4>
                                <p>Tuesday, August 4, 2020</p>
                                
                                <h4>General Election</h4>
                                <p>Tuesday, November 3, 2020</p>
                            </Paper>
                            </Grid>
                            <Grid key={1} item>
                            <Paper className={classes.paper}>
                                <h3>Voter Registration Deadlines</h3>
                                <h4>Primary Election</h4>
                                <p>Monday, July 6, 2020</p>
                                
                                <h4>General Election</h4>
                                <p>Monday, October 5, 2020</p>
                            </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
            </Grid>
    );
}

export default ElectionDates