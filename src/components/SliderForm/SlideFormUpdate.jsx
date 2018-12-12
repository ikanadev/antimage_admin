import React, { Component } from 'react'
import { connect } from 'react-redux'

import { carouselTypes, carouselOperations } from '../../state/ducks/carousel'
import { requestOperations } from '../../state/ducks/request'
import { withError } from '../../utils/enhancers'
import SliderForm from './SliderForm'

class SlideFormUpdate extends Component {
  onSubmit = (data) => {
    const { updateCarousel, close, id } = this.props
    const sliderData = Object.assign(data, { id })
    updateCarousel(sliderData).then(() => {
      close()
    })
  }

  showWarning = () => {
    const { dispatch } = this.props
    dispatch(requestOperations.createError({
      type: 'warning',
      msg: 'No olvides seleccionar una imagen y llenar los datos',
      req: carouselTypes.UPDATE_CAROUSEL
    }))
  }

  render() {
    const {
      open, close, errorMsg, loading, titulo, descripcion, urlImg
    } = this.props
    return (
      <SliderForm
        title="Actualizar Slide"
        titulo={titulo}
        descripcion={descripcion}
        urlImg={urlImg}
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
  updateCarousel: carouselOperations.updateCarousel
}

export default connect(null, mapDispatchToProps)(
  withError(SlideFormUpdate, carouselTypes.UPDATE_CAROUSEL)
)
