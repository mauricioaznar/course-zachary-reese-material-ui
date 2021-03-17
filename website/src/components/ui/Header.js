import React, {useEffect, useState} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {useTheme} from '@material-ui/core/styles'
import {makeStyles} from '@material-ui/styles'
import logo from '../../assets/logo.svg'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


const useStyles = makeStyles((theme) => {
  return {
    appbar: {
      zIndex: theme.zIndex.modal + 1
    },
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: '3em',
      [theme.breakpoints.down('md')]: {
        marginBottom: '2em'
      },
      [theme.breakpoints.down('xs')]: {
        marginBottom: '1.25em'
      }
    },
    logo: {
      height: "8em",
      [theme.breakpoints.down('md')]: {
        height: '7em'
      },
      [theme.breakpoints.down('xs')]: {
        height: '5.5em'
      }
    },
    logoContainer: {
      padding: 0,
      "&:hover": {
        backgroundColor: 'transparent'
      }
    },
    tabContainer: {
      marginLeft: 'auto'
    },
    tab: {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: "25px"
    },
    button: {
      ...theme.typography.estimate,
      borderRadius: '50px',
      marginLeft: '50px',
      marginRight: '50px',
      height: '45px'
    },
    menu: {
      backgroundColor: theme.palette.common.blue,
      color: 'white',
      borderRadius: '0px'
    },
    menuItem: {
      ...theme.typography.tab,
      opacity: 0.7,
      '&:hover': {
        opacity: 1
      }
    },
    drawerIcon: {
      height: '50px',
      width: '50px'
    },
    drawerIconContainer: {
      marginLeft: 'auto',
      '&:hover': {
        backgroundColor: 'transparent'
      }
    },
    drawer: {
      backgroundColor: theme.palette.common.blue,
      paddingRight: 0
    },
    drawerItem: {
      ...theme.typography.tab,
      color: 'white',
      opacity: 0.7
    },
    drawerItemEstimate: {
      backgroundColor: theme.palette.common.orange
    },
    drawerItemSelected: {
      '& .MuiListItemText-root': {
        opacity: 1
      }
    }
  }
})

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 5 : 0,
  });
}


export default function Header (props) {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  const [anchorEl, setAnchorEl] = useState(null)
  const [openMenu, setOpenMenu] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false)
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const menuOptions = [
    {name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0},
    {name: 'Custom software development', link: '/customsoftware',  activeIndex: 1, selectedIndex: 1},
    {name: 'iOS/Android app development ', link: '/mobileapps', activeIndex: 1, selectedIndex: 2},
    {name: 'Websites development', link: '/websites', activeIndex: 1, selectedIndex: 3}
  ]

  const routes = [
    {name: 'Home', link: '/', activeIndex: 0},
    {name: 'Services', link: '/services',  activeIndex: 1, ariaOwns: (anchorEl ? 'simple-menu' : undefined), ariaHasPopup: (anchorEl ? 'true' : undefined), onMouseOver: (e) => { handleClick(e) }},
    {name: 'The Revolution', link: '/revolution',  activeIndex: 2},
    {name: 'About us', link: '/about',  activeIndex: 3},
    {name: 'Contact', link: '/contact',  activeIndex: 4}
  ]
  const {value, setValue, selectedIndex, setSelectedIndex} = props
  useEffect(() => {
    [...menuOptions, ...routes].forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex)
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex)
            }
          }
          break
        default:
          break;
      }
    })
  }, [value, menuOptions, routes, selectedIndex, setSelectedIndex, setValue])

  const handleChange = (e, newValue) => {
    props.setValue(newValue)
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setOpenMenu(false)
  }

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null)
    setOpenMenu(false)
    props.setSelectedIndex(i)
  }

  const tabs = (
    <>
      <Tabs
        value={props.value}
        className={classes.tabContainer}
        onChange={handleChange}
        indicatorColor="primary"
      >
        {routes.map(route => {
          return <Tab
            key={route.activeIndex}
            className={classes.tab}
            label={route.name}
            component={Link}
            to={route.link}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaHasPopup}
            onMouseOver={route.onMouseOver}
          />
        })}
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        component={Link}
        to={'/estimate'}
        selected={props.value === 5}
        onClick={() => {props.setValue(5)}}
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={(e) => {handleClose(e)}}
        MenuListProps={{onMouseLeave: handleClose}}
        classes={{paper: classes.menu}}
        elevation={0}
        style={{zIndex: 1302}}
        keepMounted
      >
        {menuOptions.map((option, index) => {
          return (
            <MenuItem
              key={option.selectedIndex}
              selected={index === props.selectedIndex && props.value === 1}
              onClick={(e) => {handleMenuItemClick(e, index); props.setValue(1); handleClose(e)}}
              classes={{root: classes.menuItem}}
              component={Link}
              to={option.link}
            >
              {option.name}
            </MenuItem>
          )
        })}
      </Menu>
    </>
  )

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => {setOpenDrawer(false)}}
        onOpen={() => {setOpenDrawer(true)}}
        classes={{paper: classes.drawer}}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {
            routes.map(route => {
              return (
                <ListItem
                  key={route.activeIndex}
                  onClick={() => {setOpenDrawer(false); props.setValue(route.activeIndex)}}
                  divider
                  button
                  component={Link}
                  to={route.link}
                  selected={props.value === route.activeIndex}
                  classes={{selected: classes.drawerItemSelected}}
                >
                  <ListItemText
                    className={classes.drawerItem}
                    disableTypography
                  >
                    {route.name}
                  </ListItemText>
                </ListItem>
              )
            })
          }
          <ListItem
            classes={{root: classes.drawerItemEstimate, selected: classes.drawerItemSelected}}
            onClick={() => {setOpenDrawer(false); props.setValue(5)}}
            divider
            button
            component={Link}
            to={'/estimate'}
            selected={props.value === 5}
          >
            <ListItemText
              disableTypography
              className={classes.drawerItem}
            >
              Free estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        disableRipple
        onClick={() => {setOpenDrawer(!openDrawer)}}
      >
        <MenuIcon className={classes.drawerIcon}/>
      </IconButton>
    </React.Fragment>
  )

  return (
    <>
      <ElevationScroll>
        <AppBar
          position="fixed"
          className={classes.appbar}
        >
          <Toolbar disableGutters>
            <Button disableRipple component={Link} to="/" className={classes.logoContainer} onClick={() => {props.setValue(0)}}>
              <img alt={"company logo"} src={logo} className={classes.logo}/>
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}