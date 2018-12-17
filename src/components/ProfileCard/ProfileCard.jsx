import React, { Component } from 'react'
import {
  TextField
} from '@material-ui'

import SaveIcon from '@material-ui/icons/Save'

import AButton from '../AButton/AButton'
import PaperCont from '../PaperCont/PaperCont'

class Profile extends Component {
  constructor(props) {
    super(props)
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
      admin, errorMsg, loading
    } = this.props
    const {
      nombres, apellidos, correo, password
    } = this.state
    return (
      <PaperCont
        title="Datos Personales"
        subtitle={`Rol: ${admin.tipo}`}
      >
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
      </PaperCont>
    )
  }
}

export default Profile
