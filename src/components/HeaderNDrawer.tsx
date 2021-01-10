import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import BookIcon from '@material-ui/icons/Book';
import DetailsIcon from '@material-ui/icons/Details';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import classnames from 'classnames';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { logo } from '../images';
//for not show 'header & drawer' after 240px
import useMediaQuery from '@material-ui/core/useMediaQuery';
//CONTEXT API
import { settingDRAWER } from '../contextapi';
import { useStateValue } from '../StateContext';

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
        background: "linear-gradient(59deg, #16222A, #3A6073)",
    },
    content: {
        flexGrow: 1,
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
    }
}))

interface HeaderNDrawerProps {
   children: JSX.Element;
}

function Header({ children }: HeaderNDrawerProps) {
    const classes = useStyles();
    const theme = useTheme();
  
    const [ open, setOpen ] = useState(false);
    
    const handleDrawerOpen = () => {
       setOpen(true);
       dispatch(settingDRAWER());
    }
  
    const handleDrawerClose = () => {
       setOpen(false);
       dispatch(settingDRAWER());
    }

    const [ state, dispatch ] = useStateValue();            //jo k value "useReducer" ki deraha
    const screen240 = useMediaQuery('(max-width:240px)');   //for not show 'header & drawer' after 240px

    if(screen240 && (children?.type?.name !== undefined)) {
        //for not show 'header & drawer' after 240px except show always for front app page
        return (
            <>
                { children }
            </>
        )
    }
    else {
        return (
            <div className={classes.root}>
                <CssBaseline/>
         
                <AppBar
                    className={
                        classnames(
                           "headerNdrawer",
                           clsx(classes.appBar, { [classes.appBarShift]: open })
                        )
                    }
                    elevation={0}
                >
                   <Toolbar className="toolbar">
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                           <MenuIcon/>
                        </IconButton>
            
                        <div className="toolbar_left">
                            <img src={logo} alt=""/>
                            <Typography component="p"> SPACEX  </Typography>
                        </div>
    
                        {//undefined pe app yahan as a children hoga qk div bana k pass kara hai
                            children?.type?.name === undefined && (
                               <div className="toolbar_right">
                                    <Link to="/missions">
                                        <Button variant="contained" disableRipple id="missions"> MISSIONS </Button>
                                    </Link>
                                    <Link to="/rockets">
                                        <Button variant="contained" disableRipple id="rockets"> ROCKETS </Button>
                                    </Link>
                                    <Link to="/details">
                                        <Button variant="contained" disableRipple id="details"> DETAILS </Button>
                                    </Link>
                               </div>  
                            )
                        }
                   </Toolbar>
                </AppBar>

                <Drawer
                    className={classnames(classes.drawer, "drawer")}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                       paper: classes.drawerPaper
                    }}
                >
                    <div>
                        <IconButton id="xx" onClick={handleDrawerClose} style={{ color: "white" }}>
                           {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider/>
        
                    <List className="drawer_list">
                        {//undefined pe app yahan as a children hoga qk div bana k pass kara hai
                           children?.type?.name !== undefined && (
                               <Link to="/">
                                   <ListItemIcon> <HomeIcon className="drawer_list_icon"/> </ListItemIcon>
                                   <ListItemText primary={<p className="drawer_list_text"> HOME </p>}/>
                               </Link>
                           )
                        }
                        {
                           children?.type?.name !== "MissionList" && (
                               <Link to="/missions">
                                   <ListItemIcon> <BookIcon className="drawer_list_icon"/> </ListItemIcon>
                                   <ListItemText primary={<p className="drawer_list_text"> MISSION </p>}/>
                               </Link>
                           )
                        }                    
                        {
                            children?.type?.name !== "RocketList" && (
                                <Link to="/rockets">
                                    <ListItemIcon> <DetailsIcon className="drawer_list_icon"/> </ListItemIcon>
                                    <ListItemText primary={<p className="drawer_list_text"> ROCKETS </p>}/>
                                </Link>
                            )
                        }
                        {
                            children?.type?.name !== "Details" && (
                                <Link to="/details">
                                    <ListItemIcon> <ImportContactsIcon className="drawer_list_icon"/> </ListItemIcon>
                                    <ListItemText primary={<p className="drawer_list_text"> DETAILS </p>}/>
                                </Link>
                            )
                        }
                    </List>
                </Drawer>
        
                <main
                    className={clsx(classes.content, {
                       [classes.contentShift]: open,
                    })}
                >
                <div/>
    
                   { children }
        
                </main>
            </div>
        )     
    }
}

export default Header;