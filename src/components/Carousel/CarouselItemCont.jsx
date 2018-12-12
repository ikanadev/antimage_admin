import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { carouselOperations, carouselTypes } from '../../state/ducks/carousel'
import { withError } from '../../utils/enhancers'

import CarouselItem from '../CarouselItem/CarouselItem'

class CarouselItemCont extends Component {
  deleteCarousel = id => () => {
    const { deleteCarousel } = this.props
    deleteCarousel({ id })
  }

  render() {
    const {
      carousels, dispatch, loading, errorMsg
    } = this.props
    let items = null
    if (carousels.length > 0) {
      items = carousels.map(carousel => (
        <CarouselItem
          key={carousel.id}
          dispatch={dispatch}
          loading={loading}
          deleteCarousel={this.deleteCarousel}
          {...carousel}
        />
      ))
    }
    return (
      <Fragment>
        { errorMsg }
        { items }
      </Fragment>
    )
  }
}

const mapDispatchToProps = {
  deleteCarousel: carouselOperations.deleteCarousel
}

export default connect(null, mapDispatchToProps)(
  withError(CarouselItemCont, carouselTypes.DELETE_CAROUSEL)
)
