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
import Typography from '@material-ui/core/Typography';
    
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
    table: {
        minWidth: 650,
      },
    }));
    

    function createData(name, office, website, email, facebook, twitter) {
        return { name, office, website, email, facebook, twitter };
      }

    const ld1rows = [
        createData('Selina Bliss (R)', 'House', 'Selina Bliss', 'email', 'Facebook', 'Twitter'),
        createData('Nolan Reidhead (R)', 'House', 'Nolan Reidhead', 'email', 'Facebook', 'Twitter'),
    ];
    const ld2rows = [
        createData('Nolan Reidhead (R)', 'House', 'Nolan Reidhead', 'email', 'Facebook', 'Twitter'),
        createData('Nolan Reidhead (R)', 'House', 'Nolan Reidhead', 'email', 'Facebook', 'Twitter'),
    ];
    const ld3rows = [
        createData('Nolan Reidhead (R)', 'House', 'Nolan Reidhead', 'email', 'Facebook', 'Twitter'),
        createData('Nolan Reidhead (R)', 'House', 'Nolan Reidhead', 'email', 'Facebook', 'Twitter'),
    ];
    const ld4rows = [
        createData('Nolan Reidhead (R)', 'House', 'Nolan Reidhead', 'email', 'Facebook', 'Twitter'),
        createData('Nolan Reidhead (R)', 'House', 'Nolan Reidhead', 'email', 'Facebook', 'Twitter'),
    ];
    const ld5rows = [
        createData('Nolan Reidhead (R)', 'House', 'Nolan Reidhead', 'email', 'Facebook', 'Twitter'),
        createData('Nolan Reidhead (R)', 'House', 'Nolan Reidhead', 'email', 'Facebook', 'Twitter'),
    ];
    const ld6rows = [
        createData('Nolan Reidhead (R)', 'House', 'Nolan Reidhead', 'email', 'Facebook', 'Twitter'),
        createData('Nolan Reidhead (R)', 'House', 'Nolan Reidhead', 'email', 'Facebook', 'Twitter'),
    ];
    const ld7rows = [
        createData('Nolan Reidhead (R)', 'House', 'Nolan Reidhead', 'email', 'Facebook', 'Twitter'),
        createData('Nolan Reidhead (R)', 'House', 'Nolan Reidhead', 'email', 'Facebook', 'Twitter'),
    ];
    const ld8rows = [
        createData('Nolan Reidhead (R)', 'House', 'Nolan Reidhead', 'email', 'Facebook', 'Twitter'),
        createData('Nolan Reidhead (R)', 'House', 'Nolan Reidhead', 'email', 'Facebook', 'Twitter'),
    ];
    const ld91rows = [
        createData('Nolan Reidhead (R)', 'House', 'Nolan Reidhead', 'email', 'Facebook', 'Twitter'),
        createData('Nolan Reidhead (R)', 'House', 'Nolan Reidhead', 'email', 'Facebook', 'Twitter'),
    ];
    const ld101rows = [
        createData('Nolan Reidhead (R)', 'House', 'Nolan Reidhead', 'email', 'Facebook', 'Twitter'),
        createData('Nolan Reidhead (R)', 'House', 'Nolan Reidhead', 'email', 'Facebook', 'Twitter'),
    ];

const LdPage = () => {

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
                        Information on your Legislative District
                    </a>
                </h2>
            <TableContainer component={Paper}>
                {/* <Toolbar ><h3>LD1</h3></Toolbar>
                <Table className={classes.table} size="small" aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Office</TableCell>
                        <TableCell align="left">Website</TableCell>
                        <TableCell align="left">Facebook</TableCell>
                        <TableCell align="left">Twitter</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {ld1rows.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row">{row.name}</TableCell>
                        <TableCell align="left">{row.office}</TableCell>
                        <TableCell align="left">{row.website}</TableCell>
                        <TableCell align="left">{row.facebook}</TableCell>
                        <TableCell align="left">{row.twitter}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table> */}
            </TableContainer>
        </Grid>
    );
}
    
export default LdPage