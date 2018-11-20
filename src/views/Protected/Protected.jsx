import React from 'react'
import { connect } from 'react-redux'
import { sessionOperations } from '../../state/ducks/session'
import Drawer from '../../components/Drawer/Drawer'

const Protected = ({ logout }) => (
  <div>
    <Drawer logout={logout} />
  </div>
)

const mapDispatchToProps = {
  logout: sessionOperations.logout
}

export default connect(null, mapDispatchToProps)(Protected)
