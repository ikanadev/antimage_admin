import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withError } from '../../utils/enhancers'
import { writerOperations, writerTypes } from '../../state/ducks/writer'
import { requestOperations } from '../../state/ducks/request'

import Form from './Form'

class FormNew extends Component {
  onSubmit = (data) => {
    const { postWriter, close } = this.props
    postWriter(data).then(() => {
      close()
    })
  }

  showWarning = () => {
    const { dispatch } = this.props
    dispatch(requestOperations.createError({
      type: 'warning',
      msg: 'Completa los campos necesarios.',
      req: writerTypes.POST_WRITER
    }))
  }

  render() {
    const {
      open, close, loading, errorMsg
    } = this.props
    return (
      <Form
        title="Crear Editor"
        open={open}
        close={close}
        showWarning={this.showWarning}
        loading={loading}
        errorMsg={errorMsg}
        onSubmit={this.onSubmit}
      />
    )
  }
}

const mapDispatchToProps = {
  postWriter: writerOperations.postWriter
}

export default connect(null, mapDispatchToProps)(
  withError(
    FormNew,
    writerTypes.POST_WRITER
  )
)
