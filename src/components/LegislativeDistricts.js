import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
    
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        marginBottom: theme.spacing(2),
    },
    control: {
        padding: theme.spacing(2),
    },
    }));

const LegislativeDistricts = () => {

const [spacing, setSpacing] = React.useState(6);
    const classes = useStyles();

    function FormRow() {
        return (
          <React.Fragment>
            <Grid item xs={1}>
              <Paper className={classes.paper}>LD 1</Paper>
            </Grid>
            <Grid item xs={1}>
              <Paper className={classes.paper}>LD 2</Paper>
            </Grid>
            <Grid item xs={1}>
              <Paper className={classes.paper}>LD 3</Paper>
            </Grid>
          </React.Fragment>
        );
      }  

    const handleChange = (event) => {
    setSpacing(Number(event.target.value));
    };
    return (
        <Grid container className={classes.root} spacing={1} style={{ backgroundColor: '#f5f5f5' }}>
            <h2>
                <a
                    className="App-link"
                    href="https://azredistricting.org/districtlocator/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Find Your Arizona Federal Legislative District
                </a>
            </h2>
            <Grid container spacing={1}>
                {/* <Grid container item xs={12} spacing={3}>
                <FormRow />
                </Grid> */}
            </Grid>
        </Grid>
    );
}
    
export default LegislativeDistricts