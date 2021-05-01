import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  useTheme,
  Toolbar,
  Typography, Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: "#daa520",

    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: 265,
        backgroundColor: "lightgrey",
    },
    content: {
        flexGrow: 1,
    },
}));
function handleClick() {
}

function UniversalDrawer(props) {
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
        {/* Lefthand side bar (grey) */}
            <List>
                <ListItem>
                    <ListItemIcon> { props.ListItem1Icon } </ListItemIcon>
                     <ListItemText> { props.ListItem1 } </ListItemText>
                </ListItem>
                <ListItem button component={Link} to="/mymap">
                    <ListItemIcon>{ props.ListItem2Icon }</ListItemIcon>
                    <ListItemText> { props.ListItem2 } </ListItemText>
                </ListItem>
                <ListItem button component={Link} to="/">
                    <ListItemIcon>{ props.ListItem3Icon }</ListItemIcon>
                    <ListItemText> { props.ListItem3 } </ListItemText>
                </ListItem>
            </List>
        </div>
    );
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                  <div className="container">
                    <a href="../">
                      <span className="navbar-brand mb-0 px-0 h1">
                        <img
                          src="images/sun.icon.TP.png"
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
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                  </div>
                  <div className="col-sm-1 col-xs-1 col-md-1 col-lg-1"></div>
                  <div className="d-flex   justify-content-end">
                    <Button onClick={handleClick}
                            variant="text"
                            color="default"
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
                        anchor={theme.direction === "rtl" ? "right" : "left"}
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
                { props.MapView }
            </main>
        </div>
    );
}
export default UniversalDrawer;
