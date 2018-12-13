import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
  CardContent, ListItemIcon, ListItemText, TextField, MenuItem, Card, Fab, CircularProgress
} from '@material-ui'

import ClearIcon from '@material-ui/icons/Clear'
import SaveIcon from '@material-ui/icons/Save'
import { withStyles } from '@material-ui/core/styles'
import styles from './ItemStyles'

import { contactOperations, contactTypes } from '../../state/ducks/contact'
import { requestOperations } from '../../state/ducks/request'
import { withError } from '../../utils/enhancers'

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tipo: 'correo',
      valor: '',
      nombre: ''
    }
  }

  handleTextChange = name => (event) => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleUpload = () => {
    const { valor, nombre } = this.state
    const { createContact, close, dispatch } = this.props
    if (valor.trim() === '' || nombre.trim() === '') {
      dispatch(requestOperations.createError({
        type: 'warning',
        msg: 'No se permiten campos vacíos.',
        req: contactTypes.POST_CONTACT
      }))
      return
    }
    createContact(this.state).then(() => {
      this.setState({
        tipo: 'correo',
        valor: '',
        nombre: ''
      })
      close()
    })
  }

  render() {
    const {
      tipo, valor, nombre
    } = this.state
    const {
      classes, icons, close, errorMsg, loading
    } = this.props
    return (
      <Fragment>
        <Card style={{ width: '100%' }}>
          { errorMsg }
          <CardContent
            className={classes.container}
          >
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

            <TextField
              autoFocus
              margin="dense"
              value={valor}
              onChange={this.handleTextChange('valor')}
              label={tipo === 'correo' ? 'Correo: ' : 'Número: '}
            />

            <TextField
              autoFocus
              margin="dense"
              value={nombre}
              onChange={this.handleTextChange('nombre')}
              label="Texto a mostrar:"
            />

            <div className={classes.actionsCont}>
              <div className={classes.wrapper}>
                <Fab
                  size="small"
                  color="primary"
                  aria-label="Crear"
                  disabled={loading}
                  onClick={this.handleUpload}
                >
                  <SaveIcon />
                </Fab>
                { loading && <CircularProgress size={47} className={classes.fabProgress} /> }
              </div>

              <Fab
                size="small"
                color="secondary"
                aria-label="Cancelar"
                onClick={close}
              >
                <ClearIcon />
              </Fab>
            </div>

          </CardContent>
        </Card>
      </Fragment>
    )
  }
}

const mapDispatchToProps = ({
  createContact: contactOperations.postContact
})

export default connect(null, mapDispatchToProps)(
  withError(
    withStyles(styles)(Item),
    contactTypes.POST_CONTACT
  )
)
