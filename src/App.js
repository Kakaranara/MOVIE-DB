import './App.css';
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import {
  createMuiTheme, ThemeProvider, IconButton, Typography, Divider,
  Toolbar, List, ListItem, ListItemIcon, ListItemText, Drawer, AppBar
} from '@material-ui/core';

import DataSearch from './pages/Search.js';
import AboutUs from './pages/aboutUs.js';
import Movies from './pages/Movies.js';
import Peoples from './pages/Peoples.js';

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  var drawerStats = false;

  const handleDrawer = () => {
    drawerStats = !drawerStats;
    setOpen(drawerStats);
  };

  const linkStyle = {
    color: 'black',
    textDecoration: 'none'
  }

  return (
    <Router>
      <ThemeProvider theme={font}>
        <Typography variant="h3">Movie DB</Typography>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawer} edge="start" >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>MOVIE DB</Typography>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" className={clsx(classes.drawer, { [classes.drawerOpen]: open, [classes.drawerClose]: !open, })}
            classes={{ paper: clsx({ [classes.drawerOpen]: open, [classes.drawerClose]: !open, }) }}>
            <Toolbar />
            <div className={classes.drawerContainer}>
              <List>
                {/* LINK TO HOME */}
                <Link to='/' style={linkStyle}>
                  <ListItem button key="Home">
                    <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItem>
                </Link>
              </List>
              <Divider />
              <List>
                {/* LINK TO MOVIES */}
                <Link to='/movies' style={linkStyle}>
                  <ListItem button key="Movies">
                    <ListItemIcon>{<MovieIcon />}</ListItemIcon>
                    <ListItemText primary="Movies" />
                  </ListItem>
                </Link>
                {/* LINK TO TV-SHOWS */}
                <Link to='/tv-shows' style={linkStyle}>
                  <ListItem button key="TV Shows">
                    <ListItemIcon>{<TvIcon />}</ListItemIcon>
                    <ListItemText primary="TV Shows" />
                  </ListItem>
                </Link>
                {/* LINK TO PEOPLES */}
                <Link to='/peoples' style={linkStyle}>
                  <ListItem button key="Peoples">
                    <ListItemIcon>{<PeopleIcon />}</ListItemIcon>
                    <ListItemText primary="Peoples" />
                  </ListItem>
                </Link>
              </List>
              <Divider />
              <List>
                {/* LINK TO ABOUT US */}
                <Link to='/aboutUs' style={linkStyle}>
                  <ListItem button key="About Us">
                    <ListItemIcon>{<AssignmentIndIcon />}</ListItemIcon>
                    <ListItemText primary="About Us" />
                  </ListItem>
                </Link>
              </List>
            </div>
          </Drawer>



          <main className={classes.content}>
            <br />
            <Switch>
              <Route path='/' exact component={DataSearch} />
              <Route path='/aboutUs' component={AboutUs} />
              <Route path='/movies' component={Movies} />
              <Route path='/peoples' component={Peoples}/>
            </Switch>
          </main>
        </div>


      </ThemeProvider>
    </Router>
  )
}

const font = createMuiTheme({
  typography: {
    fontFamily: [
      'Work Sans',
      'Rubik',
      'sans-serif'
    ],
  }
});
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default App;

