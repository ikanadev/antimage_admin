import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Grid, CircularProgress, Collapse
} from '@material-ui'

import PhoneIcon from '@material-ui/icons/Phone'
import SmartphoneIcon from '@material-ui/icons/Smartphone'
import EmailIcon from '@material-ui/icons/Email'

import { withError } from '../../utils/enhancers'
import { contactTypes, contactOperations } from '../../state/ducks/contact'

import PaperCont from '../PaperCont/PaperCont'
import ListCont from './ListCont'
import Form from './Form'

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
      loading, errorMsg, contacts, dispatch
    } = this.props
    let loadingComp = null
    if (loading) {
      loadingComp = <CircularProgress size={70} />
    }
    return (
      <PaperCont
        title="Información de Contacto"
        onClick={this.handleForm(true)}
        tooltip="Crear Nuevo"
      >
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
      </PaperCont>
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
    Main,
    contactTypes.REQUEST_CONTACT_LIST
  )
)
