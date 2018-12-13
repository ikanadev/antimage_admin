import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'

import {
  Paper, Typography, Fab, Tooltip, Divider, Grid, CircularProgress, Collapse
} from '@material-ui'

import AddIcon from '@material-ui/icons/Add'
import PhoneIcon from '@material-ui/icons/Phone'
import SmartphoneIcon from '@material-ui/icons/Smartphone'
import EmailIcon from '@material-ui/icons/Email'

import { withError } from '../../utils/enhancers'
import { contactTypes, contactOperations } from '../../state/ducks/contact'

import ListCont from './ListCont'
import Form from './Form'

import styles from './MainStyles'

const icons = {
  telefono: <PhoneIcon />,
  celular: <SmartphoneIcon />,
  correo: <EmailIcon />
}

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
    const { contacts, requestList } = this.props
    if (contacts.length === 0) {
      requestList()
    }
  }

  render() {
    const { isOpenForm } = this.state
    const {
      classes, loading, errorMsg, contacts, dispatch
    } = this.props
    let loadingComp = null
    if (loading) {
      loadingComp = <CircularProgress size={70} />
    }
    return (
      <Paper className={classes.container} elevation={8}>
        {/* <SliderFormNew
          open={openForm}
          close={this.handleForm(false)}
          dispatch={dispatch}
        /> */}
        <div className={classes.titleContainer}>
          <Typography variant="h5" component="h3">
            Informaci&oacute;n de Contacto
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
              <Form icons={icons} close={this.handleForm(false)} dispatch={dispatch} />
              <br />
              <br />
            </div>
          </Collapse>
          { errorMsg }
          { loadingComp }
          <ListCont icons={icons} contacts={contacts} dispatch={dispatch} />
        </Grid>
      </Paper>
    )
  }
}

const mapStateToProps = state => ({
  contacts: state.contact.list
})

const mapDispatchToProps = {
  requestList: contactOperations.requestContactList
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withError(
    withStyles(styles)(Main),
    contactTypes.REQUEST_CONTACT_LIST
  )
)
