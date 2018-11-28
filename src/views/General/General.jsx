import React from 'react'
import { connect } from 'react-redux'

import CarrerData from '../../components/CarrerData/CarrerData'
import Carousel from '../../components/Carousel/Carousel'
import { sessionOperations } from '../../state/ducks/session'
import { carrerOperations } from '../../state/ducks/carrer'
import { carouselOperations } from '../../state/ducks/carousel'

const General = ({
  carouselData, requestCarouselList, resetRequestError, ...props
}) => (
  <div>
    <CarrerData {...props} />
    <br />
    <br />
    <Carousel
      carouselData={carouselData}
      carouselOperations={{
        requestCarouselList,
        resetRequestError
      }}
    />
  </div>
)

const mapStateToProps = state => ({
  carrer: state.session.carrer,
  errorType: state.carrer.errorType,
  errorMsg: state.carrer.errorMsg,
  loading: state.carrer.loading,
  carouselData: {
    ...state.carousel
  }
})

const mapDispatchToProps = {
  updateCarrerBegin: carrerOperations.updateCarrer,
  updateCarrer: data => sessionOperations.updateCarrer(data),
  resetError: carrerOperations.resetError,
  setFailedError: err => carrerOperations.setFailedError(err),
  setFatalError: err => carrerOperations.setFatalError(err),
  setWarningError: warn => carrerOperations.setWarningError(warn),
  updateCarrerSuccess: carrerOperations.updateCarrerSuccess,
  ...carouselOperations
}

export default connect(mapStateToProps, mapDispatchToProps)(General)
