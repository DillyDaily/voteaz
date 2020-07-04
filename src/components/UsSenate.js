import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
    
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        whiteSpace: 'nowrap',
    },
    control: {
        padding: theme.spacing(2),
    },
    table: {
        minWidth: 650,
      },
    }));
    

    function createData(name, website, email, facebook, twitter, webhref, fbhref) {
        return { name, website, email, facebook, twitter, webhref, fbhref };
      }

    const ld1rows = [
        createData('Martha McSally (R)', 'Martha McSally', 'Not Listed', 'Facebook', '@MarthaMcSally', 'https://www.mcsallyfom/', 'https://www.facebook.com/MarthaMcSally' ),
        createData('Daniel McCarthy (R)', 'Daniel McCarthy', 'Not Listed', 'Facebook', '@DemandDanielAZ', 'https://demanddaniel.com/', 'https://www.facebook.com/DemandDanielAZ/'),
        createData('Mark Kelly (D)', 'Mark Kelly', 'Not Listed', 'Facebook', '@CaptMarkKelly', 'https://markkelly.com/', 'https://www.facebook.com/CaptMarkKelly'),
        createData('Brandon Garcia (D)', 'Not Listed', 'heirhawkeye@gmail.com', 'Not Listed', 'Not Listed'),
        createData('Alan White (LBT)', 'Not Listed', ' info@nomoretweedles.com', 'Not Listed', 'Not Listed'),
    ];
    

const USsenate = () => {

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
                        href="http://www.senate.gov/states/AZ/intro.htm"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        US Senate
                    </a>
                </h2>
                <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Website</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Facebook</TableCell>
                            <TableCell align="left">Twitter</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {ld1rows.map((row) => (
                            <TableRow key={row.name}>
                            <TableCell component="th" scope="row">{row.name}</TableCell>
                            <TableCell align="left">
                                <a
                                    className="App-link"
                                    href={row.webhref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    {row.website}
                                </a>
                                
                            </TableCell>
                            <TableCell align="left">{row.email}</TableCell>
                            <TableCell align="left">
                                <a
                                    className="App-link"
                                    href={row.fbhref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    {row.facebook}
                                </a>
                            </TableCell>
                            <TableCell align="left">
                                <a
                                    className="App-link"
                                    href={row.twhref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    {row.twitter}
                                </a>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
            </TableContainer>
            </Grid>
    );
}
    
export default USsenate