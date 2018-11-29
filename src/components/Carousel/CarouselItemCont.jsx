import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'

import CarouselItem from '../CarouselItem/CarouselItem'

import styles from './CarouselItemContStyles'

class CarouselItemCont extends Component {
  componentDidMount = () => {
    // console.log(this.props)
  }

  render() {
    const { carousels } = this.props
    let items = null
    if (carousels.length > 0) {
      items = carousels.map(carousel => (
        <CarouselItem
          key={carousel.id}
          {...carousel}
        />
      ))
    }
    return (
      <Fragment>
        { items }
      </Fragment>
    )
  }
}

export default withStyles(styles)(CarouselItemCont)
