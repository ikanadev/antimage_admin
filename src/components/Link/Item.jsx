import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
  CardContent, Typography, Divider, Fab, Fade, TextField, CircularProgress
} from '@material-ui'

import CreateIcon from '@material-ui/icons/Create'
import ClearIcon from '@material-ui/icons/Clear'
import SaveIcon from '@material-ui/icons/Save'
import { withStyles } from '@material-ui/core/styles'

import { linkOperations, linkTypes } from '../../state/ducks/link'
import { withError } from '../../utils/enhancers'

import styles from './ItemStyles'

class Item extends Component {
  constructor(props) {
    super(props)
    const { urlEnlace, nombre } = this.props
    this.state = {
      isHover: false,
      editMode: false,
      urlEnlace,
      nombre
    }
    this.defaultValues = {
      urlEnlace,
      nombre,
      editMode: false
    }
  }

  handleUpdate = () => {
    const { id, updateLink } = this.props
    const { urlEnlace, nombre } = this.state
    const data = {
      id,
      datos: {
        urlEnlace,
        nombre
      }
    }
    updateLink(data).then(() => {
      this.setState({
        editMode: false
      })
    })
  }

  handleDelete = () => {
    const { id, deleteLink } = this.props
    deleteLink({ id })
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
      isHover, editMode, urlEnlace, nombre
    } = this.state
    const {
      classes, loadingUpdate, loading, errorMsg
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
                <TextField
                  autoFocus
                  margin="dense"
                  value={urlEnlace}
                  onChange={this.handleTextChange('urlEnlace')}
                  label="URL (Link del sitio):"
                />
              )
              : <Typography>{urlEnlace}</Typography>
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
  deleteLink: linkOperations.deleteLink
})

export default connect(null, mapDispatchToProps)(
  withError(
    withStyles(styles)(Item),
    linkTypes.DELETE_LINK
  )
)
