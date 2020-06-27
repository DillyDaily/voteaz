import React, { useState, useEffect } from 'react';
import { AppBar, CssBaseline, Divider, Drawer, List, ListItem, ListItemText, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Menu, ChevronLeft, ChevronRight } from '@material-ui/icons';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const LeftMenu = () => {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar> 
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            VOTE AZ
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
        <List >
            <ListItemLink href="ElectionDates">
            <ListItemText primary="Election Dates" />
          </ListItemLink>
        </List>
        <List >
            <ListItemLink href="VotingInElections">
            <ListItemText primary="Voting in Elections" />
          </ListItemLink>
        </List>
        <List >
            <ListItemLink href="CongressionalDistricts">
            <ListItemText primary="Congressional Districts" />
          </ListItemLink>
        </List>
        <List >
            <ListItemLink href="LegislativeDistricts">
            <ListItemText primary="Legislative Districts" />
          </ListItemLink>
        </List>
        <List >
            <ListItemLink href="StateJudicialCandidates">
            <ListItemText primary="State Judicial Candidates" />
          </ListItemLink>
        </List>
        <List >
            <ListItemLink href="USsenate">
            <ListItemText primary="US Senate" />
          </ListItemLink>
        </List>
        <Divider />
        <List>
          {['Books', 'Videos', 'Podcasts', 'Biz to Support'].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
        <a
            className="App-link"
            href="https://www.azcleanelections.gov/arizona-elections"
            target="_blank"
            rel="noopener noreferrer"
            >
            Upcoming Elections
        </a>
    </div>
    );
}

export default LeftMenu;