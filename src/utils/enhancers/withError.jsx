import React from 'react'
import { connect } from 'react-redux'

import SnackMsg from '../../components/SnackMsg/SnackMsg'
import { requestOperations } from '../../state/ducks/request'

const withError = (Component, type) => {
  const HOF = (props) => {
    const { request, resetError, ...rest } = props
    const {
      errorType, reqType, loading, errorMsg
    } = request
    let msg = null
    let isLoading = false
    if (reqType === type) {
      isLoading = loading
      if (errorType != null) {
        msg = (
          <SnackMsg
            variant={errorType}
            message={errorMsg}
            onClose={resetError}
          />
        )
      }
    }
    return (
      <Component loading={isLoading} errorMsg={msg} {...rest} />
    )
  }
  const mapStateToProps = state => ({
    request: state.request
  })
  const mapDispatchToProps = ({
    resetError: requestOperations.resetError
  })
  return connect(mapStateToProps, mapDispatchToProps)(HOF)
}

export default withError
