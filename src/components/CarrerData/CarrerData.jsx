import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Avatar,
  Paper,
  Typography,
  Divider,
  TextField,
  Grid,
  Button
} from '@material-ui'


import SaveIcon from '@material-ui/icons/Save'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

import AButton from '../AButton/AButton'
import SnackMsg from '../SnackMsg/SnackMsg'
import styles from './CarrerDataStyles'
import { fetchFiles } from '../../utils'
// import { sessionOperations } from '../../state/ducks/session'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nombre: props.carrer.nombre,
      descripcion: props.carrer.descripcion,
      urlLogo: props.carrer.urlLogo,
      file: null
    }
    this.inputRef = React.createRef()
    this.defaultState = this.state
  }

  handleTextChange = name => (event) => {
    this.setState({
      [name]: event.target.value
    })
  }

  previewImage = () => {
    const input = this.inputRef.current
    if (input.files.lenght <= 0) {
      return
    }
    const reader = new FileReader()
    reader.readAsDataURL(input.files[0])
    reader.onload = ((e) => {
      this.setState({
        urlLogo: e.target.result,
        file: input.files[0]
      })
    })
  }

  handleUpdate = () => {
    const {
      nombre, descripcion, file, urlLogo
    } = this.state
    const {
      updateCarrer,
      updateCarrerBegin,
      updateCarrerSuccess,
      setFatalError,
      setFailedError,
      setWarningError
    } = this.props
    let data
    if (file !== null) {
      data = {
        nombre,
        descripcion,
        urlLogo: file
      }
    } else {
      data = {
        nombre,
        descripcion
      }
    }
    updateCarrerBegin()
    fetchFiles('/carrer/', data)
      .then((res) => {
        if (res.code === 200) {
          const newCarrer = res.content.data.carrer
          if (newCarrer.urlLogo === 'null') {
            newCarrer.urlLogo = urlLogo
          }
          updateCarrer(newCarrer)
          updateCarrerSuccess()
        }
        if (res.code > 200 && res.code < 500) {
          setWarningError(res.usrmsg)
        }
        if (res.code >= 500) {
          setFailedError(res.usrmsg)
          this.setState(this.defaultState)
        }
      },
      (err) => {
        setFatalError(err.message)
        this.setState(this.defaultState)
      })
  }

  render() {
    const {
      classes, errorType, errorMsg, resetError, loading
    } = this.props
    const { nombre, descripcion, urlLogo } = this.state
    let snack = null
    if (errorType) {
      // this.setDefault()
      snack = (
        <SnackMsg
          variant={errorType}
          message={errorMsg}
          onClose={resetError}
        />
      )
    }
    return (
      <Paper className={classes.container} elevation={8}>
        <Typography variant="h5" component="h3">
          Sobre la Carrera
        </Typography>
        <Divider />
        <br />
        { snack }
        <br />
        <Grid container>
          <Grid item md={5}>
            <Grid container direction="column" justify="center" alignItems="center">
              <Avatar
                alt="Logo Carrera"
                src={urlLogo}
                className={classes.avatar}
              />
              <input
                accept="image/*"
                ref={this.inputRef}
                className={classes.input}
                id="contained-button-file"
                type="file"
                onChange={this.previewImage}
              />
              <label htmlFor="contained-button-file"> {/* eslint-disable-line*/}
                <Button variant="contained" color="default" component="span" className={classes.buttonUpload}>
                  Cambiar Logo &nbsp;
                  <CloudUploadIcon className={classes.rightIcon} />
                </Button>
              </label>
            </Grid>
          </Grid>

          <Grid item md={7}>
            <TextField
              label="Nombre:"
              // className={classes.textField}
              value={nombre}
              onChange={this.handleTextChange('nombre')}
              margin="dense"
              fullWidth
            />
            <br />
            <br />
            <TextField
              fullWidth
              label="Descripción"
              multiline
              rowsMax="4"
              value={descripcion}
              onChange={this.handleTextChange('descripcion')}
              margin="normal"
              variant="outlined"
            />
            <br />
            <br />
          </Grid>

        </Grid>
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
