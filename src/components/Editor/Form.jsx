import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  TextField, Dialog, DialogTitle, DialogContent, DialogActions
} from '@material-ui'

import SaveIcon from '@material-ui/icons/Save'
import ClearIcon from '@material-ui/icons/Clear'

import AButton from '../AButton/AButton'

import styles from './FormStyles'

class Form extends Component {
  static defaultProps = {
    nombres: '',
    apellidos: '',
    correo: ''
  }

  constructor(props) {
    super(props)
    const { nombres, apellidos, correo } = this.props
    this.state = {
      nombres,
      apellidos,
      correo,
      password: ''
    }
    this.defaultUser = {
      nombres,
      apellidos,
      correo
    }
  }

  handleTextChange = name => (event) => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleUpdate = () => {
    const { onSubmit, showWarning } = this.props
    const { nombres, apellidos, correo } = this.state
    if (nombres === '' || apellidos === '' || correo === '') {
      showWarning()
      return
    }
    onSubmit(this.state)
  }

  setDefault = () => {
    this.setState(this.defaultUser)
  }

  render() {
    const {
      errorMsg, loading, open, close, title, classes
    } = this.props
    const {
      nombres, apellidos, correo, password
    } = this.state
    return (
      <Dialog
        open={open}
        onClose={close}
        scroll="body"
        className={classes.container}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          { errorMsg }
          <br />
          <TextField
            label="Nombres:"
            // className={classes.textField}
            value={nombres}
            onChange={this.handleTextChange('nombres')}
            margin="dense"
            fullWidth
          />
          <br />
          <br />
          <TextField
            label="Apellidos:"
            // className={classes.textField}
            value={apellidos}
            onChange={this.handleTextChange('apellidos')}
            margin="dense"
            fullWidth
          />
          <br />
          <br />
          <TextField
            label="Correo:"
            // className={classes.textField}
            value={correo}
            onChange={this.handleTextChange('correo')}
            margin="dense"
            fullWidth
          />
          <br />
          <br />
          <TextField
            label="Nuevo Password:"
            placeholder={this.defaultUser.nombres === '' ? '' : 'Dejar en blanco para mantener el antiguo'}
            // className={classes.textField}
            value={password}
            onChange={this.handleTextChange('password')}
            margin="dense"
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
          />
          <br />
          <br />
          <DialogActions>
            <AButton
              text="Guardar"
              type="button"
              icon={<SaveIcon />}
              isLoading={loading}
              onClick={this.handleUpdate}
            />
            <AButton
              text="Cancelar"
              type="button"
              isPrimary={false}
              icon={<ClearIcon />}
              onClick={close}
            />
          </DialogActions>
        </DialogContent>
      </Dialog>
    )
  }
}

export default withStyles(styles)(Form)
