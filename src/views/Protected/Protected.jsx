import React from 'react'
import { connect } from 'react-redux'
import { sessionOperations } from '../../state/ducks/session'
import Drawer from '../../components/Drawer/Drawer'

const Protected = props => (
  <div>
    <Drawer {...props} />
  </div>
)

const mapStateToProps = state => ({
  admin: state.session.admin,
  carrer: state.session.carrer
})

const mapDispatchToProps = {
  logout: sessionOperations.logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Protected)
