import React from 'react';
import {Link} from "react-router-dom";
import DisplayTime from "../DisplayTime/DisplayTime";
import {AppBar, CssBaseline, Drawer, Hidden,
  IconButton, List, ListItem, ListItemIcon, ListItemText,
 makeStyles, useTheme, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import MapIcon from '@material-ui/icons/Map';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#e8b633",
    marginTop: 80,
    //backgroundColor: "#8d359c",
    //;#722c7d,#a73eb8
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
    marginTop: 80,
  },
  content: {
    padding: theme.spacing(3),
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
              <ListItemText primary="My favourite walks"></ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/profile">
              <ListItemIcon>{<MapIcon />}</ListItemIcon>
              <ListItemText primary="Map"></ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/main">
              <ListItemIcon>{<AccountCircleIcon />}</ListItemIcon>
              <ListItemText primary="Logout"></ListItemText>
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
      <AppBar position="fixed" className={classes.appBar}>
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
          <Typography variant="h6" noWrap>
            Welcome to the { props.Greeting }
          </Typography>
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
      <main className={classes.content}>
        <div className={classes.toolbar} />
          <h4>
            Today's best times for a sunny walk
          </h4>
          <ul>
            <DisplayTime dispTime={ time } />
            <DisplayTime dispTime={ time }/>
            <DisplayTime dispTime={ time }/>
          </ul>
        <Typography paragraph>

        </Typography>
        <Typography paragraph>

        </Typography>
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
