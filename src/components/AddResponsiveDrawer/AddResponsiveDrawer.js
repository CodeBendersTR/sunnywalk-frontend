import React from 'react';
import {Link} from "react-router-dom";
import CardHome from "../CardHome/CardHome";
import {
  AppBar, CssBaseline, Drawer, Hidden,
  IconButton, List, ListItem, ListItemIcon, ListItemText,
  makeStyles, useTheme, Toolbar, Typography, Grid, Button
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import MapIcon from '@material-ui/icons/Map';

const drawerWidth = 200;

function handleClick() {
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      //marginTop: 80,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#e8b633",
    //marginTop: 80,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "lightgrey",
    //marginTop: 80,
  },
  content: {
    padding: theme.spacing(20),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
        <List>
            <ListItem button component={Link} to="/profile">
              <ListItemIcon>{<DirectionsWalkIcon />}</ListItemIcon>
              <ListItemText>My favourite walks</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/mymap">
              <ListItemIcon>{<MapIcon />}</ListItemIcon>
              <ListItemText primary="My Map"></ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/main">
              <ListItemIcon>{<AccountCircleIcon />}</ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </ListItem>
        </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar  className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className="container">
            <a href="https://github.com/CodeBendersTR">
              <span className="navbar-brand mb-0 px-0 h1">
                <img
                    src="images/sun.icon.gif"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="sun icon"
                  ></img>
                     SUNNY WALK
                  <Typography variant="h6" noWrap>
                    {/*Welcome to the { props.Greeting }*/}
                  </Typography>
              </span>
            </a>
          </div>
          <div className="col-sm-1 col-xs-1 col-md-1 col-lg-1"></div>
          <div className="d-flex   justify-content-end">
            <Button onClick={handleClick}
                    variant="text"
                    color="default"
              // href="../Profile"
                    href={props.FirstButton}
                    alt="Profile button"
                    my={1}
                    px={2}
            >
              { props.ButtonProfile }
            </Button>
            <Button onClick={handleClick}
                    variant="text"
                    color="default"
              // href="../Home"
                    href={props.SecondButton}
                    alt="Home User button"
                    my={1}
                    px={2}
            >
              { props.ButtonUserHome }
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      {/* Code to display time/buttons in 3 cards */}
      <main className={classes.content}>
        <div>
          <h4>
            Today's best times for a sunny walk
          </h4>
          <ul>
            <Grid container spacing={5}>
              <Grid container item lg={4} xs={12} spacing={2}>
                <CardHome dispTime={ time } />
              </Grid>
              <Grid container item lg={4} xs={12} spacing={2}>
                <CardHome dispTime={ time } />
              </Grid>
              <Grid container item lg={4} xs={12} spacing={2}>
                <CardHome dispTime={ time } />
              </Grid>
            </Grid>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
