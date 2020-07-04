import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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
  

const VotingInElections = () => {

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
                        href="https://azsos.gov/elections/voting-election"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Voting In This Election
                    </a>
                </h2>
                    <Grid item xs={12}>
                        <Grid container spacing={spacing}>
                            <Grid key={0} item>
                                <h3>Helpful links for navigating the 2020 Election</h3>
                                <p>
                                    <a
                                        className="App-link"
                                        href="https://servicearizona.com/VoterRegistration/selectLanguage"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        Register to Vote
                                    </a>
                                </p>
                                <p> 
                                    <a
                                    className="App-link"
                                    href="https://recorder.maricopa.gov/BeBallotReady/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    Check/Edit Your Voter Registration Status
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="https://my.arizona.vote/AbsenteeTracker.aspx"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        Check Your Mailed Ballot Status
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="https://my.arizona.vote/UOCAVA2/default.aspx"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        Uniformed and Overseas Citizen Portal
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="https://azsos.gov/county-election-info"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        Contact Info for County Election Officials
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="https://azsos.gov/elections/voting-election/voting-equipment"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        Questions About Voting Equipment Being Used?
                                    </a>
                                </p>
                                
                                
                            </Grid>
                        </Grid>
                    </Grid>
            </Grid>
    );
}

export default VotingInElections