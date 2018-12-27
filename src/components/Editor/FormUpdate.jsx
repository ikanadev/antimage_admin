import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withError } from '../../utils/enhancers'
import { writerOperations, writerTypes } from '../../state/ducks/writer'
import { requestOperations } from '../../state/ducks/request'
import Form from './Form'

class FormUpdate extends Component {
  onSubmit = (data) => {
    const { updateWriter, close, id } = this.props
    updateWriter({
      id,
      datos: data
    }).then(() => {
      close()
    })
  }

  showWarning = () => {
    const { dispatch } = this.props
    dispatch(requestOperations.createError({
      type: 'warning',
      msg: 'Completa los campos necesarios.',
      req: writerTypes.UPDATE_WRITER
    }))
  }

  render() {
    const {
      open, close, loading, errorMsg, nombres, apellidos, correo
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
        nombres={nombres}
        apellidos={apellidos}
        correo={correo}
      />
    )
  }
}

const mapDispatchToProps = {
  updateWriter: writerOperations.updateWriter
}

export default connect(null, mapDispatchToProps)(
  withError(
    FormUpdate,
    writerTypes.UPDATE_WRITER
  )
)
