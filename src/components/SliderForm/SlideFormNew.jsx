import React, { Component } from 'react'
import { connect } from 'react-redux'

import { carouselTypes, carouselOperations } from '../../state/ducks/carousel'
import { requestOperations } from '../../state/ducks/request'
import { withError } from '../../utils/enhancers'
import SliderForm from './SliderForm'

class SlideFormNew extends Component {
  onSubmit = (data) => {
    const { postCarousel, close } = this.props
    postCarousel(data).then(
      () => {
        close()
      }
    )
  }

  showWarning = () => {
    const { dispatch } = this.props
    dispatch(requestOperations.createError({
      type: 'warning',
      msg: 'No olvides seleccionar una imagen y llenar los datos',
      req: carouselTypes.POST_CAROUSEL
    }))
  }

  render() {
    const {
      open, close, errorMsg, loading
    } = this.props
    return (
      <SliderForm
        title="Crear Slide"
        open={open}
        close={close}
        errorMsg={errorMsg}
        loading={loading}
        onSubmit={this.onSubmit}
        showWarning={this.showWarning}
      />
    )
  }
}

const mapDispatchToProps = {
  postCarousel: carouselOperations.postCarousel
}

export default connect(null, mapDispatchToProps)(
  withError(SlideFormNew, carouselTypes.POST_CAROUSEL)
)
