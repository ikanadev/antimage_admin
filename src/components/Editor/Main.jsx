import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  CircularProgress
} from '@material-ui'

import { writerOperations, writerTypes } from '../../state/ducks/writer'
import { withError } from '../../utils/enhancers'

import PaperCont from '../PaperCont/PaperCont'
import FormNew from './FormNew'
import ItemCont from './ItemCont'


class Main extends Component {
  constructor() {
    super()
    this.state = {
      showForm: false
    }
  }

  componentDidMount = () => {
    const { requestWriters, writers } = this.props
    if (writers.length === 0) {
      requestWriters()
    }
  }

  openForm = state => () => {
    this.setState({
      showForm: state
    })
  }

  render() {
    const { showForm } = this.state
    const {
      loading, errorMsg, writers, dispatch
    } = this.props
    let loadingComp = null
    if (loading) {
      loadingComp = <CircularProgress size={70} />
    }
    return (
      <PaperCont
        title="Escritores"
        subtitle="Personas que pueden hacer publicaciones."
        onClick={this.openForm(true)}
        tooltip="Agregar Editor"
      >
        { errorMsg }
        { loadingComp }
        <FormNew
          open={showForm}
          close={this.openForm(false)}
          dispatch={dispatch}
        />
        <ItemCont
          writers={writers}
          dispatch={dispatch}
        />
      </PaperCont>
    )
  }
}

const mapStateToProps = state => ({
  writers: state.writer.list
})
const mapDispatchToProps = {
  requestWriters: writerOperations.requestWriters
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withError(
    Main,
    writerTypes.REQUEST_WRITERS
  )
)
