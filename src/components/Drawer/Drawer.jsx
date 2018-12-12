import React from 'react'
import classNames from 'classnames'
import { Route, Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import {
  Drawer, AppBar, Toolbar, List, Typography, Divider, Menu,
  MenuItem, IconButton, ListItem, ListItemIcon, ListItemText
} from '@material-ui'

// Icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import MenuIcon from '@material-ui/icons/Menu'
import AssignmentIcon from '@material-ui/icons/Assignment'
import DescriptionIcon from '@material-ui/icons/Description'
import ContactsIcon from '@material-ui/icons/Contacts'
import WebIcon from '@material-ui/icons/Web'
import ListIcon from '@material-ui/icons/List'
import CreateIcon from '@material-ui/icons/Create'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

import Profile from '../../views/Profile/Profile'
import Editors from '../../views/Editors/Editors'
import General from '../../views/General/General'
import Info from '../../views/Info/Info'
import Menus from '../../views/Menus/Menus'
import Pages from '../../views/Pages/Pages'
import Publications from '../../views/Publications/Publications'

import styles from './DrawerStyles'

const menuItems = [
  {
    text: 'Datos Generales', icon: <AssignmentIcon />, url: 'general', component: dispatch => () => <General dispatch={dispatch} />
  },
  {
    text: 'Información Adicional', icon: <DescriptionIcon />, url: 'informacion-adicional', component: dispatch => () => <Info dispatch={dispatch} />
  },
  {
    text: 'Administrar Editores', icon: <ContactsIcon />, url: 'administrar-editores', component: dispatch => () => <Editors dispatch={dispatch} />
  },
  {
    text: 'Administrar Menús', icon: <ListIcon />, url: 'administrar-menus', component: dispatch => () => <Menus dispatch={dispatch} />
  },
  {
    text: 'Páginas', icon: <WebIcon />, url: 'paginas', component: dispatch => () => <Pages dispatch={dispatch} />
  },
  {
    text: 'Publicaciones', icon: <CreateIcon />, url: 'publicaciones', component: dispatch => () => <Publications dispatch={dispatch} />
  }
]

class MiniDrawer extends React.Component {
  state = {
    open: false,
    anchorEl: null
  }

  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const {
      classes, theme, logout, carrer, admin, match, location, dispatch
    } = this.props
    const { open, anchorEl } = this.state
    const openAE = Boolean(anchorEl)

    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: open
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              { carrer.nombre }
            </Typography>
            <Typography variant="subtitle1" color="inherit" noWrap>
              { `${admin.apellidos}, ${admin.nombres}` }
            </Typography>

            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircleIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={openAE}
                onClose={this.handleClose}
              >
                <MenuItem className={classes.floatMenu} onClick={this.handleClose}>
                  <Link to={`${match.url}/perfil`} className={classes.link}>
                    Perfil
                  </Link>
                </MenuItem>
                <MenuItem className={classes.floatMenu} onClick={logout}>Salir</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose)
          }}
          open={open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {menuItems.map(menu => (
              <Link to={`${match.url}/${menu.url}`} className={classes.link} key={menu.url}>
                <ListItem selected={location.pathname === `${match.url}/${menu.url}`} button>
                  <ListItemIcon>{menu.icon}</ListItemIcon>
                  <ListItemText
                    disableTypography
                  >
                    <Typography variant="subtitle1" color="textPrimary">
                      <b>
                        {menu.text}
                      </b>
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Route path={`${match.path}/perfil`} component={() => <Profile dispatch={dispatch} />} />
          {
            menuItems.map(menuItem => (
              <Route key={menuItem.url} path={`${match.path}/${menuItem.url}`} component={menuItem.component(dispatch)} />
            ))
          }
        </main>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(MiniDrawer)
