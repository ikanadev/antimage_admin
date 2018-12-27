import React, { Component, Fragment } from 'react'
import {
  TableRow, TableCell, Fab, CircularProgress, Fade
} from '@material-ui'
import { withStyles } from '@material-ui/core/styles'
import CreateIcon from '@material-ui/icons/Create'
import ClearIcon from '@material-ui/icons/Clear'

import FormUpdate from './FormUpdate'
import styles from './ItemStyles'

class Item extends Component {
  constructor() {
    super()
    this.state = {
      isHover: false,
      showForm: false
    }
  }

  delete = id => () => {
    const { deleteWriter } = this.props
    deleteWriter({ id })
  }

  openForm = state => () => {
    this.setState({
      showForm: state
    })
  }

  handleHover = state => () => {
    this.setState({
      isHover: state
    })
  }

  render() {
    const { isHover, showForm } = this.state
    const {
      id, nombres, apellidos, correo, loading, classes, dispatch
    } = this.props
    return (
      <Fragment>
        <FormUpdate
          id={id}
          nombres={nombres}
          apellidos={apellidos}
          correo={correo}
          dispatch={dispatch}
          open={showForm}
          close={this.openForm(false)}
        />
        <TableRow
          onMouseEnter={this.handleHover(true)}
          onMouseLeave={this.handleHover(false)}
        >
          <TableCell>
            {nombres}
          </TableCell>
          <TableCell>
            {apellidos}
          </TableCell>
          <TableCell>
            {correo}
          </TableCell>
          <TableCell align="right">
            {
              isHover && (
                <Fade in={isHover}>
                  <div className={classes.actionsCont}>
                    <Fab
                      size="small"
                      color="primary"
                      onClick={this.openForm(true)}
                    >
                      <CreateIcon />
                    </Fab>
                    <div className={classes.wrapper}>
                      <Fab
                        size="small"
                        color="secondary"
                        onClick={this.delete(id)}
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
          </TableCell>
        </TableRow>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Item)
