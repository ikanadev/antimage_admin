import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'

import {
  Paper, Typography, Fab, Tooltip, Divider, Grid, CircularProgress, Collapse
} from '@material-ui'

import AddIcon from '@material-ui/icons/Add'

import { withError } from '../../utils/enhancers'
import { linkTypes, linkOperations } from '../../state/ducks/link'

import ItemCont from './ItemCont'
import Form from './Form'

import styles from './MainStyles'


class Main extends Component {
  constructor() {
    super()
    this.state = {
      isOpenForm: false
    }
  }

  handleForm = open => () => {
    this.setState({
      isOpenForm: open
    })
  }

  componentDidMount = () => {
    const { links, requestLinks } = this.props
    if (links.length === 0) {
      requestLinks()
    }
  }

  render() {
    const { isOpenForm } = this.state
    const {
      classes, loading, errorMsg, links, dispatch
    } = this.props
    let loadingComp = null
    if (loading) {
      loadingComp = <CircularProgress size={70} />
    }
    return (
      <Paper className={classes.container} elevation={8}>
        <div className={classes.titleContainer}>
          <Typography variant="h5" component="h3">
            Enlaces Externos
          </Typography>
          <Tooltip title="Crear Slide" placement="top">
            <Fab
              size="small"
              color="primary"
              className={classes.addButton}
              onClick={this.handleForm(true)}
            >
              <AddIcon />
            </Fab>
          </Tooltip>
        </div>
        <Divider />
        <br />
        <Grid container direction="column" justify="center" alignItems="center">
          <Collapse
            in={isOpenForm}
            timeout={500}
            style={{ width: '100%' }}
          >
            <div>
              <Form close={this.handleForm(false)} dispatch={dispatch} />
              <br />
              <br />
            </div>
          </Collapse>
          { errorMsg }
          { loadingComp }
          <ItemCont links={links} dispatch={dispatch} />
        </Grid>
      </Paper>
    )
  }
}

const mapStateToProps = state => ({
  links: state.link.list
})

const mapDispatchToProps = {
  requestLinks: linkOperations.requestLinks
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withError(
    withStyles(styles)(Main),
    linkTypes.REQUEST_LINKS
  )
)
