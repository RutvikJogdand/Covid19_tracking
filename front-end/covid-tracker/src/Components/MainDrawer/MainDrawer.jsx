import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MainTabs from '../MainTabs/MainTabs';

const drawerWidth = 140;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  flexAlign:{
    marginLeft:"94%"
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  },
}));

export default function MainDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" style={{background: "#E41B23"}} className={classes.appBar}>
        <Toolbar>
          {/* <Typography variant="h6" >
            Permanent drawer
          </Typography> */}
          <Typography className={classes.flexAlign} variant="h6" noWrap>
            <AccountCircleIcon/>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div>
          <img src="https://raw.githubusercontent.com/RutvikJogdand/Covid19_tracking/main/front-end/photos/logo_size_invert.jpg" height="auto" width="100%" alt="logo"/>
        </div>
        <div className={classes.toolbar} />
        
        {/* <Divider /> */}
        <Typography  noWrap>
            Employees
        </Typography>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          <MainTabs/>
      </main>
    </div>
  );
}
