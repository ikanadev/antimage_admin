import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
  CardContent, TextField, Card, Fab, CircularProgress
} from '@material-ui'

import ClearIcon from '@material-ui/icons/Clear'
import SaveIcon from '@material-ui/icons/Save'
import { withStyles } from '@material-ui/core/styles'
import styles from './ItemStyles'

import { linkOperations, linkTypes } from '../../state/ducks/link'
import { requestOperations } from '../../state/ducks/request'
import { withError } from '../../utils/enhancers'

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      urlEnlace: '',
      nombre: ''
    }
  }

  handleTextChange = name => (event) => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleUpload = () => {
    const { urlEnlace, nombre } = this.state
    const { createLink, close, dispatch } = this.props
    if (urlEnlace.trim() === '' || nombre.trim() === '') {
      dispatch(requestOperations.createError({
        type: 'warning',
        msg: 'No se permiten campos vacíos.',
        req: linkTypes.POST_LINK
      }))
      return
    }
    createLink(this.state).then(() => {
      this.setState({
        urlEnlace: '',
        nombre: ''
      })
      close()
    })
  }

  render() {
    const {
      urlEnlace, nombre
    } = this.state
    const {
      classes, close, errorMsg, loading
    } = this.props
    return (
      <Fragment>
        <Card style={{ width: '100%' }}>
          { errorMsg }
          <CardContent
            className={classes.container}
          >

            <TextField
              autoFocus
              margin="dense"
              value={nombre}
              onChange={this.handleTextChange('nombre')}
              label="Texto a mostrar:"
            />

            <TextField
              autoFocus
              margin="dense"
              value={urlEnlace}
              onChange={this.handleTextChange('urlEnlace')}
              label="URL (Link del sitio):"
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
  createLink: linkOperations.postLink
})

export default connect(null, mapDispatchToProps)(
  withError(
    withStyles(styles)(Item),
    linkTypes.POST_LINK
  )
)
