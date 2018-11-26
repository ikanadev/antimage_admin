import React from 'react'
import { connect } from 'react-redux'
import { personalOperations } from '../../state/ducks/personal'

import ProfileCard from '../../components/ProfileCard/ProfileCard'

const Profile = props => (
  <div>
    <ProfileCard {...props} />
  </div>
)

const mapStateToProps = state => ({
  admin: state.session.admin,
  errorType: state.personal.errorType,
  errorMsg: state.personal.errorMsg,
  loading: state.personal.loading
})

const mapDispatchToProps = {
  update: data => personalOperations.update(data),
  resetError: personalOperations.resetError
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
