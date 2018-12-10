import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Particles from '../../components/Particles/Particles'
import Form from '../../components/Form/Form'
import { sessionOperations, sessionTypes } from '../../state/ducks/session'
import { withError } from '../../utils/enhancers'

function Login({ isAuthenticated, ...rest }) {
  if (isAuthenticated) {
    return <Redirect to="/" />
  }
  return (
    <div>
      <Particles maxParticles={120} drawInterval={100} />
      <Form {...rest} />
    </div>
  )
}
const mapStateToProps = state => ({
  isAuthenticated: state.session.isAuthenticated
})

const mapDispatchToProps = {
  login: body => (sessionOperations.login(body))
}
export default connect(mapStateToProps, mapDispatchToProps)(
  withError(Login, sessionTypes.LOGIN)
)
