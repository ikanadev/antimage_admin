import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
  CardContent, List, ListItem, ListItemIcon, ListItemText, Typography, Divider, Fab, Fade, TextField, MenuItem, CircularProgress
} from '@material-ui'

import CreateIcon from '@material-ui/icons/Create'
import ClearIcon from '@material-ui/icons/Clear'
import SaveIcon from '@material-ui/icons/Save'
import { withStyles } from '@material-ui/core/styles'

import { contactOperations, contactTypes } from '../../state/ducks/contact'
import { withError } from '../../utils/enhancers'

import styles from './ItemStyles'

class Item extends Component {
  constructor(props) {
    super(props)
    const { tipo, valor, nombre } = this.props
    this.state = {
      isHover: false,
      editMode: false,
      tipo,
      valor,
      nombre
    }
    this.defaultValues = {
      tipo,
      valor,
      nombre,
      editMode: false
    }
  }

  handleUpdate = () => {
    const { id, updateContact } = this.props
    const { tipo, valor, nombre } = this.state
    const data = {
      id,
      datos: {
        tipo,
        valor,
        nombre
      }
    }
    updateContact(data).then(() => {
      this.setState({
        editMode: false
      })
    })
  }

  handleDelete = () => {
    const { id, deleteContact } = this.props
    deleteContact({ id })
  }

  handleTextChange = name => (event) => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleHover = status => () => {
    this.setState({
      isHover: status
    })
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  cancelEditMode = () => {
    this.setState(this.defaultValues)
  }

  render() {
    const {
      isHover, editMode, tipo, valor, nombre
    } = this.state
    const {
      classes, icons, loadingUpdate, loading, errorMsg
    } = this.props
    return (
      <Fragment>
        { errorMsg }
        <CardContent
          className={classes.container}
          onMouseEnter={this.handleHover(true)}
          onMouseLeave={this.handleHover(false)}
        >
          {
            editMode
              ? (
                <TextField
                  select
                  label="Tipo:"
                  value={tipo}
                  onChange={this.handleTextChange('tipo')}
                  margin="normal"
                >
                  {Object.keys(icons).map(type => (
                    <MenuItem key={type} value={type}>
                      <ListItemIcon>
                        {icons[type]}
                      </ListItemIcon>
                      <ListItemText disableTypography className={classes.itemText} inset primary={type.charAt(0).toUpperCase() + type.slice(1)} />
                    </MenuItem>
                  ))}
                </TextField>
              )
              : (
                <List>
                  <ListItem>
                    <ListItemIcon>
                      {icons[tipo]}
                    </ListItemIcon>
                    <ListItemText primary={tipo.charAt(0).toUpperCase() + tipo.slice(1)} />
                  </ListItem>
                </List>
              )
          }

          {
            editMode
              ? (
                <TextField
                  autoFocus
                  margin="dense"
                  value={valor}
                  onChange={this.handleTextChange('valor')}
                  label={tipo === 'correo' ? 'Correo: ' : 'Número: '}
                />
              )
              : <Typography>{valor}</Typography>
          }

          {
            editMode
              ? (
                <TextField
                  margin="dense"
                  value={nombre}
                  onChange={this.handleTextChange('nombre')}
                  label="Texto a mostrar:"
                />
              )
              : <Typography>{nombre}</Typography>
          }

          {
            editMode
              ? (
                <div className={classes.actionsCont}>
                  <div className={classes.wrapper}>
                    <Fab
                      size="small"
                      color="primary"
                      aria-label="Guardar"
                      disabled={loadingUpdate}
                      onClick={this.handleUpdate}
                    >
                      <SaveIcon />
                    </Fab>
                    { loadingUpdate && <CircularProgress size={47} className={classes.fabProgress} /> }
                  </div>
                  <div className={classes.wrapper}>
                    <Fab
                      size="small"
                      color="secondary"
                      aria-label="Cancelar"
                      onClick={this.cancelEditMode}
                    >
                      <ClearIcon />
                    </Fab>
                    {/* loading && <CircularProgress size={47} className={classes.fabProgress} /> */}
                  </div>
                </div>
              )
              : (
                <Fade in={isHover}>
                  <div className={classes.actionsCont}>
                    <Fab
                      size="small"
                      color="primary"
                      aria-label="Editar"
                      onClick={this.activateEditMode}
                    >
                      <CreateIcon />
                    </Fab>
                    <div className={classes.wrapper}>
                      <Fab
                        size="small"
                        color="secondary"
                        onClick={this.handleDelete}
                        disabled={loading}
                      >
                        <ClearIcon />
                      </Fab>
                      { loading && <CircularProgress size={47} className={classes.fabProgress} /> }
                    </div>
                  </div>
                </Fade>
              )
          }

        </CardContent>
        <Divider />
      </Fragment>
    )
  }
}

const mapDispatchToProps = ({
  deleteContact: contactOperations.deleteContact
})

export default connect(null, mapDispatchToProps)(
  withError(
    withStyles(styles)(Item),
    contactTypes.DELETE_CONTACT
  )
)
