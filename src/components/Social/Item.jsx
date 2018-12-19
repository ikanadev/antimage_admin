import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'

import Icon from '@mdi/react'

import {
  mdiFacebookBox,
  mdiYoutube,
  mdiWhatsapp,
  mdiInstagram,
  mdiTwitter,
  mdiLinkedin,
  mdiTwitch
} from '@mdi/js'
import {
  Typography,
  CardContent,
  Divider,
  Fab,
  CircularProgress,
  Fade,
  TextField,
  FormControlLabel,
  Switch
} from '@material-ui'
import SaveIcon from '@material-ui/icons/Save'
import ClearIcon from '@material-ui/icons/Clear'
import CreateIcon from '@material-ui/icons/Create'

import styles from './ItemStyles'

const socialMediaIcons = {
  facebook: <Icon path={mdiFacebookBox} color="#3C5699" size={1.4} />,
  youtube: <Icon path={mdiYoutube} color="#D32631" size={1.4} />,
  whatsapp: <Icon path={mdiWhatsapp} color="#00B74C" size={1.4} />,
  instagram: <Icon path={mdiInstagram} color="#464646" size={1.4} />,
  twitter: <Icon path={mdiTwitter} color="#5AA5D9" size={1.4} />,
  linkedin: <Icon path={mdiLinkedin} color="#0075B3" size={1.4} />,
  twitch: <Icon path={mdiTwitch} color="#673FA0" size={1.4} />
}

// props: (classes, habilitado (0, 1), loading, nombre, texto
//        updateSocial, url)

class Item extends Component {
  constructor(props) {
    super(props)
    const {
      url, texto, habilitado
    } = this.props
    this.state = {
      url,
      texto,
      habilitado,
      isHover: false,
      editMode: false
    }
    this.defaultState = {
      url, texto, habilitado, editMode: false
    }
  }

  handleTextChange = name => (event) => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleSwitchChange = name => (event) => {
    this.setState({ [name]: event.target.checked })
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
    this.setState(this.defaultState)
  }

  handleUpdate = () => {
    const { id, updateSocial } = this.props
    const { habilitado, texto, url } = this.state
    const body = {
      id,
      datos: {
        habilitado, texto, url
      }
    }
    updateSocial(body).then(() => {
      this.setState({
        editMode: false
      })
    })
  }

  render() {
    const {
      editMode, isHover, texto, url, habilitado
    } = this.state
    const { classes, loading, nombre } = this.props
    const estado = habilitado ? 'Habilitado' : 'Inhabilitado'
    return (
      <Fragment>
        <CardContent
          className={classes.container}
          onMouseEnter={this.handleHover(true)}
          onMouseLeave={this.handleHover(false)}
        >

          <div className={classes.iconCont}>
            { socialMediaIcons[nombre] }
            <Typography>
              {nombre.charAt(0).toUpperCase() + nombre.slice(1)}
            </Typography>
          </div>


          {
            editMode
              ? (
                <TextField
                  className={classes.texto}
                  autoFocus
                  margin="dense"
                  value={texto}
                  onChange={this.handleTextChange('texto')}
                  label="Texto a mostrar:"
                />
              )
              : <Typography className={classes.texto}>{texto}</Typography>
          }

          {
            editMode
              ? (
                <TextField
                  className={classes.texto}
                  margin="dense"
                  multiline
                  value={url}
                  onChange={this.handleTextChange('url')}
                  label="URL (Link del Sitio):"
                />
              )
              : <Typography className={classes.texto}>{url}</Typography>
          }

          {
            editMode
              ? (
                <FormControlLabel
                  className={classes.estado}
                  control={(
                    <Switch
                      checked={habilitado}
                      onChange={this.handleSwitchChange('habilitado')}
                      value="checkedA"
                    />
                  )}
                  labelPlacement="top"
                  label="Habilitar"
                />
              )
              : (
                <Typography className={classes.estado} color={habilitado ? 'primary' : 'secondary'}>
                  {estado}
                </Typography>
              )
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
                      disabled={loading}
                      onClick={this.handleUpdate}
                    >
                      <SaveIcon />
                    </Fab>
                    { loading && <CircularProgress size={47} className={classes.fabProgress} /> }
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

export default withStyles(styles)(Item)
