import React from 'react'
import { connect } from 'react-redux'

import { withError } from '../../utils/enhancers'
import CarrerData from '../../components/CarrerData/CarrerData'
import Carousel from '../../components/Carousel/Carousel'

import { sessionOperations, sessionTypes } from '../../state/ducks/session'
import { carouselOperations, carouselTypes } from '../../state/ducks/carousel'

const CarrerDataWithErrors = withError(
  props => <CarrerData {...props} />,
  sessionTypes.UPDATE_CARRER
)

const CarouselWithErrors = withError(
  props => <Carousel {...props} />,
  carouselTypes.REQUEST_CAROUSEL_LIST
)

const General = ({
  carrer, updateCarrer, carousels, requestCarouselList, ...props
}) => (
  <div>
    <CarrerDataWithErrors
      carrer={carrer}
      updateCarrer={updateCarrer}
      {...props}
    />
    <br />
    <br />
    <CarouselWithErrors
      carousels={carousels}
      requestCarouselList={requestCarouselList}
      {...props}
    />
  </div>
)

const mapStateToProps = state => ({
  carrer: state.session.carrer,
  carousels: state.carousel.list
})

const mapDispatchToProps = {
  updateCarrer: data => sessionOperations.updateCarrer(data),
  requestCarouselList: carouselOperations.requestCarouselList
}

export default connect(mapStateToProps, mapDispatchToProps)(General)
