import React from 'react'
import { connect } from 'react-redux'
import { sessionOperations, sessionTypes } from '../../state/ducks/session'

import { withError } from '../../utils/enhancers'
import ProfileCard from '../../components/ProfileCard/ProfileCard'

const Profile = props => (
  <div>
    <ProfileCard {...props} />
  </div>
)

const mapStateToProps = state => ({
  admin: state.session.admin
})

const mapDispatchToProps = {
  updateUser: data => sessionOperations.updateUser(data)
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withError(Profile, sessionTypes.UPDATE_USER)
)
