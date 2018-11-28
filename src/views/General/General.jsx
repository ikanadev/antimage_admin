import React from 'react'
import { connect } from 'react-redux'

import CarrerData from '../../components/CarrerData/CarrerData'
import { sessionOperations } from '../../state/ducks/session'
import { carrerOperations } from '../../state/ducks/carrer'

const General = props => (
  <div>
    <CarrerData {...props} />
  </div>
)

const mapStateToProps = state => ({
  carrer: state.session.carrer,
  errorType: state.carrer.errorType,
  errorMsg: state.carrer.errorMsg,
  loading: state.carrer.loading
})

const mapDispatchToProps = {
  updateCarrerBegin: carrerOperations.updateCarrer,
  updateCarrer: data => sessionOperations.updateCarrer(data),
  resetError: carrerOperations.resetError,
  setFailedError: err => carrerOperations.setFailedError(err),
  setFatalError: err => carrerOperations.setFatalError(err),
  setWarningError: warn => carrerOperations.setWarningError(warn),
  updateCarrerSuccess: carrerOperations.updateCarrerSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(General)
