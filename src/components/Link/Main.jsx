import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Grid, CircularProgress, Collapse
} from '@material-ui'

import { withError } from '../../utils/enhancers'
import { linkTypes, linkOperations } from '../../state/ducks/link'

import PaperCont from '../PaperCont/PaperCont'
import ItemCont from './ItemCont'
import Form from './Form'

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
      loading, errorMsg, links, dispatch
    } = this.props
    let loadingComp = null
    if (loading) {
      loadingComp = <CircularProgress size={70} />
    }
    return (
      <PaperCont
        title="Enlaces Externos"
        onClick={this.handleForm(true)}
        tooltip="Crear Enlace"
      >
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
      </PaperCont>
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
    Main,
    linkTypes.REQUEST_LINKS
  )
)
