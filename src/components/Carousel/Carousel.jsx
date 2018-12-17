import React, { Component } from 'react'
import {
  CircularProgress,
  Grid
} from '@material-ui'

import PaperCont from '../PaperCont/PaperCont'
import CarouselItemCont from './CarouselItemCont'
import SliderFormNew from '../SliderForm/SlideFormNew'

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openForm: false
    }
  }

  componentDidMount = () => {
    const { carousels, requestCarouselList } = this.props
    if (carousels.length === 0) {
      requestCarouselList()
    }
  }

  handleForm = open => () => {
    this.setState({
      openForm: open
    })
  }

  render() {
    const { openForm } = this.state
    const {
      carousels, errorMsg, loading, dispatch
    } = this.props
    let loadingComp = null
    if (loading) {
      loadingComp = <CircularProgress size={70} />
    }
    return (
      <PaperCont
        title="Slide de Imágenes"
        subtitle="(Carousel)"
        onClick={this.handleForm(true)}
        tooltip="Crear Slide"
      >
        <br />
        <SliderFormNew
          open={openForm}
          close={this.handleForm(false)}
          dispatch={dispatch}
        />
        <Grid container direction="column" justify="center" alignItems="center">
          { errorMsg }
          { loadingComp }
          <CarouselItemCont carousels={carousels} dispatch={dispatch} />
        </Grid>
      </PaperCont>
    )
  }
}

export default Carousel
