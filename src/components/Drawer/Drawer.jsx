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

import styles from './DrawerStyles'

const menuItems = [
  { text: 'Datos Generales', icon: <AssignmentIcon /> },
  { text: 'Información Adicional', icon: <DescriptionIcon /> },
  { text: 'Administrar Editores', icon: <ContactsIcon /> },
  { text: 'Administrar Menús', icon: <ListIcon /> },
  { text: 'Páginas', icon: <WebIcon /> },
  { text: 'Publicaciones', icon: <CreateIcon /> }
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
    console.log(this.props)
    const {
      classes, theme, logout, carrer, admin, match
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
                <MenuItem onClick={this.handleClose}>
                  <Link to={`${match.url}/perfil`}>Perfil</Link>
                </MenuItem>
                <MenuItem onClick={logout}>Salir</MenuItem>
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
              <ListItem button key={menu.text}>
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
            ))}
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
          elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
          hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
          velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
          Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
          viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
          Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
          at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
          ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
          </Typography>
          <Route path={`${match.path}/perfil`} component={Profile} />
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus
            sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
            In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
            et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique
            sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo
            viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography>
        </main>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(MiniDrawer)
