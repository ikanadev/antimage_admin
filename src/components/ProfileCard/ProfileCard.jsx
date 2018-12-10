import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Paper,
  Typography,
  Divider,
  TextField
} from '@material-ui'

import SaveIcon from '@material-ui/icons/Save'

import AButton from '../AButton/AButton'
import styles from './ProfileCardStyles'

class Profile extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      nombres: props.admin.nombres,
      apellidos: props.admin.apellidos,
      correo: props.admin.correo,
      password: ''
    }
    this.defaultUser = {
      nombres: props.admin.nombres,
      apellidos: props.admin.apellidos,
      correo: props.admin.correo
    }
  }

  handleTextChange = name => (event) => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleUpdate = () => {
    const { updateUser } = this.props
    updateUser(this.state)
  }

  setDefault = () => {
    this.setState(this.defaultUser)
  }

  render() {
    const {
      classes, admin, errorMsg, loading
    } = this.props
    const {
      nombres, apellidos, correo, password
    } = this.state
    return (
      <Paper className={classes.container} elevation={8}>
        <Typography variant="h5" component="h3">
          Datos Personales
        </Typography>
        <Typography variant="subtitle2">
          Rol:&nbsp;
          {admin.tipo}
        </Typography>
        <Divider />
        <br />
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
          placeholder="Dejar en blanco para mantener el antiguo"
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
        <AButton
          text="Guardar"
          type="button"
          icon={<SaveIcon />}
          isLoading={loading}
          onClick={this.handleUpdate}
        />
      </Paper>
    )
  }
}

export default withStyles(styles)(Profile)
