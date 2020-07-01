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
    

const LegislativeDistricts = () => {

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
                        href="https://azredistricting.org/districtlocator/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Find you Arizona Federal Legislative District
                    </a>
                </h2>
                    <Grid item xs={12}>
                        <Grid container spacing={spacing}>
                            <Grid key={0} item>
                                {/* <h3>Click on the district below for election information specific to that district. </h3> */}
                                {/* <p>
                                    <a
                                        className="App-link"
                                        href="https://en.wikipedia.org/wiki/Arizona%27s_1st_legislative_district"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="App-link"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        LD1
                                    </a>
                                </p> */}
                            </Grid>
                        </Grid>
                    </Grid>
            </Grid>
    );
}
    
export default LegislativeDistricts