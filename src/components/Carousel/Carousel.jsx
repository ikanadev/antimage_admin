import React, { Component } from 'react'
import {
  Paper,
  Typography,
  Divider,
  CircularProgress,
  Grid,
  Fab,
  Tooltip
} from '@material-ui'

import AddIcon from '@material-ui/icons/Add'

import { withStyles } from '@material-ui/core/styles'

import SnackMsg from '../SnackMsg/SnackMsg'
import CarouselItemCont from './CarouselItemCont'
import SliderForm from '../SliderForm/SliderForm'
import styles from './CarouselStyles'

class Carousel extends Component {
  constructor() {
    super()
    this.state = {
      openForm: false
    }
  }

  componentDidMount = () => {
    const { carouselData, carouselOperations } = this.props
    const { carousels } = carouselData
    if (carousels.length === 0) {
      carouselOperations.requestCarouselList()
    }
  }

  handleForm = open => () => {
    this.setState({
      openForm: open
    })
  }

  render() {
    const { openForm } = this.state
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
        <SliderForm
          open={openForm}
          close={this.handleForm(false)}
        />
        <div className={classes.titleContainer}>
          <Typography variant="h5" component="h3">
            Slide Im&aacute;genes
          </Typography>
          <Tooltip title="Crear Slide" placement="top">
            <Fab
              size="small"
              color="primary"
              className={classes.addButton}
              onClick={this.handleForm(true)}
            >
              <AddIcon />
            </Fab>
          </Tooltip>
        </div>
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
