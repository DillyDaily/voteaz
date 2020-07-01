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
  

const StateJudicialCandidates = () => {

const [spacing, setSpacing] = React.useState(6);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
    return (
        <Grid container className={classes.root} spacing={1} style={{ backgroundColor: '#f5f5f5' }}>
                <h2>
                    <a
                        className="App-link"
                        href="https://www.azcourts.gov/jpr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        State Judicial Candidates
                    </a>
                </h2>
                    <Grid item xs={12}>
                        <Grid container spacing={spacing}>
                            <Grid key={0} item>
                                <p>
                                    <a
                                        className="App-link"
                                        href="https://www.azcourts.gov/jpr/Judicial-Performance-Reports/Judicial-Report/regionid/3"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        Arizona Supreme Court 
                                    </a>
                                    (All Arizonans vote)
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="https://www.azcourts.gov/jpr/Judicial-Performance-Reports/Judicial-Report/regionid/5"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        Coconino County Superior Court
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="https://www.azcourts.gov/jpr/Judicial-Performance-Reports/Judicial-Report/courtid/3"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        Pima County Superior Court
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="https://www.azcourts.gov/jpr/Judicial-Performance-Reports/Judicial-Report/courtid/4"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        Pinal County Superior Court
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="https://www.azcourts.gov/jpr/Judicial-Performance-Reports/Judicial-Report/courtid/1/benchid/4"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        Maricopa County Court of Appeals, Division 1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="https://www.azcourts.gov/jpr/Judicial-Performance-Reports/Judicial-Report/courtid/1/benchid/5"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        Maricopa County Court of Appeals, Division 2
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="https://www.azcourts.gov/jpr/Judicial-Performance-Reports/Judicial-Report/courtid/2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        Maricopa County Superior Court
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="https://apps.arizona.vote/info/IRR/2020-general-election/18/0"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        Ballots, Initiatives, and Referendums
                                    </a>
                                </p>
                            </Grid>
                        </Grid>
                    </Grid>
            </Grid>
    );
}

export default StateJudicialCandidates