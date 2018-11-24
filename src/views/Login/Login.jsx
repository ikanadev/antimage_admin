import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Particles from '../../components/Particles/Particles'
import Form from '../../components/Form/Form'
import { sessionOperations } from '../../state/ducks/session'

function Login({
  login, isAuthenticated, loading, errorType, errorMsg, resetError
}) {
  if (isAuthenticated) {
    return <Redirect to="/" />
  }
  return (
    <div>
      <Particles maxParticles={120} drawInterval={100} />
      <Form
        login={login}
        isLoading={loading}
        errorType={errorType}
        errorMsg={errorMsg}
        resetError={resetError}
      />
    </div>
  )
}
const mapStateToProps = state => ({
  isAuthenticated: state.session.isAuthenticated,
  loading: state.session.loading,
  errorType: state.session.errorType,
  errorMsg: state.session.errorMsg
})

const mapDispatchToProps = {
  login: body => (sessionOperations.login(body)),
  resetError: sessionOperations.resetError
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
