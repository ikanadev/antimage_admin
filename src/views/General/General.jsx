import React from 'react'
import { connect } from 'react-redux'

import CarrerData from '../../components/CarrerData/CarrerData'

const General = props => (
  <div>
    <CarrerData {...props} />
  </div>
)

const mapStateToProps = state => ({
  carrer: state.session.carrer
})

export default connect(mapStateToProps)(General)
