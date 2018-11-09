import React from 'react'
import { connect } from 'react-redux'

import Particles from '../../components/Particles/Particles'
import Form from '../../components/Form/Form'
import { sessionOperations } from '../../state/ducks/session'

function Login({ login }) {
  return (
    <div>
      <Particles maxParticles={120} drawInterval={100} />
      <Form login={login} />
    </div>
  )
}
const mapStateToProps = state => ({
  isAuthenticated: state.session
})

const mapDispatchToProps = {
  login: body => (sessionOperations.login(body)),
  hello: () => { console.log('hola') }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
