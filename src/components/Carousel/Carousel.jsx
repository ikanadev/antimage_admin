import React, { Component } from 'react'
import {
  Paper,
  Typography,
  Divider,
  CircularProgress,
  Grid
} from '@material-ui'

import { withStyles } from '@material-ui/core/styles'

import SnackMsg from '../SnackMsg/SnackMsg'
import CarouselItemCont from './CarouselItemCont'
import styles from './CarouselStyles'

class Carousel extends Component {
  componentDidMount = () => {
    const { carouselData, carouselOperations } = this.props
    const { carousels } = carouselData
    if (carousels.length === 0) {
      carouselOperations.requestCarouselList()
    }
  }

  render() {
    const { classes, carouselData, carouselOperations } = this.props
    const { errorMsgRequest, errorTypeRequest, loadingRequest } = carouselData
    let snack = null
    let loadingComp = null
    if (errorTypeRequest) {
      // this.setDefault()
      snack = (
        <SnackMsg
          variant={errorTypeRequest}
          message={errorMsgRequest}
          onClose={carouselOperations.resetRequestError}
        />
      )
    }
    if (loadingRequest) {
      loadingComp = <CircularProgress size={70} />
    }
    return (
      <Paper className={classes.container} elevation={8}>
        <Typography variant="h5" component="h3">
          Slide Im&aacute;genes
        </Typography>
        <Divider />
        <br />
        <Grid container direction="column" justify="center" alignItems="center">
          { snack }
          { loadingComp }
          <CarouselItemCont carousels={carouselData.carousels} />
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(Carousel)
