import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Home = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Redirect to="/login" />
  }

  return (<Redirect to="/admin" />)
}

const mapStateToProps = state => ({
  isAuthenticated: state.session.isAuthenticated
})

export default connect(mapStateToProps)(Home)
