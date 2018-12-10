import React, { Component } from 'react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button
} from '@material-ui'
import { withStyles } from '@material-ui/core/styles'

import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import ClearIcon from '@material-ui/icons/Clear'

import AButton from '../AButton/AButton'
import { fetchFiles } from '../../utils'

import styles from './SlideFormStyles'

class SliderForm extends Component {
  constructor() {
    super()
    this.state = {
      titulo: '',
      descripcion: '',
      urlImg: null,
      file: null
    }
    this.inputRef = React.createRef()
  }

  componentDidMount = () => {
    console.log('SLIDE FORM PROPS: ', this.props)
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
        urlImg: e.target.result,
        file: input.files[0]
      })
    })
  }

  handleUpload = () => {
    const {
      titulo, descripcion, file
    } = this.state
    const data = {
      titulo,
      descripcion,
      urlImg: file
    }
    fetchFiles('/carousel/', data)
      .then((res) => {
        console.log(res)
      })
  }

  render() {
    const { titulo, descripcion, urlImg } = this.state
    const { open, close, classes } = this.props
    return (
      <Dialog
        open={open}
        onClose={close}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Las Im&aacute;genes se mostrar&aacute;n en el slider principal de la p&aacute;gina.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            value={titulo}
            onChange={this.handleTextChange('titulo')}
            label="Texto Principal"
            fullWidth
          />
          <br />
          <br />
          <TextField
            fullWidth
            label="Texto Secundario"
            rowsMax="4"
            value={descripcion}
            onChange={this.handleTextChange('descripcion')}
            margin="dense"
          />
          {
            urlImg === null
              ? null
              : <img className={classes.imgPreview} src={urlImg} alt="" />
          }
          <input
            accept="image/*"
            ref={this.inputRef}
            className={classes.input}
            id="new-slider-button-file"
            type="file"
            onChange={this.previewImage}
          />
          <label htmlFor="new-slider-button-file"> {/* eslint-disable-line*/}
            <Button variant="contained" color="default" component="span" className={classes.buttonUpload}>
              { urlImg === null ? 'Elegir ' : 'Cambiar '}
              Imagen &nbsp;
              <CloudUploadIcon className={classes.rightIcon} />
            </Button>
          </label>
        </DialogContent>
        <DialogActions>
          <AButton
            isPrimary={false}
            text="Cerrar"
            type="button"
            icon={<ClearIcon />}
            // isLoading={loading}
            onClick={close}
          />
          <AButton
            text="Guardar"
            type="button"
            icon={<CloudUploadIcon />}
            // isLoading={loading}
            onClick={this.handleUpload}
          />
        </DialogActions>
      </Dialog>
    )
  }
}

export default withStyles(styles)(SliderForm)
