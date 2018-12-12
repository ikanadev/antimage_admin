import React, { Fragment, Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Card, CardContent, CardMedia, Typography, Fab, CircularProgress
} from '@material-ui'

import ClearIcon from '@material-ui/icons/Clear'
import CreateIcon from '@material-ui/icons/Create'

import styles from './CarouselItemStyles'

import SlideFormUpdate from '../SliderForm/SlideFormUpdate'

class CarouselItem extends Component {
  constructor() {
    super()
    this.state = {
      isHover: false,
      openForm: false
    }
  }

  handleHover = status => () => {
    this.setState({
      isHover: status
    })
  }

  handleForm = open => () => {
    this.setState({
      openForm: open
    })
  }

  render() {
    const { isHover, openForm } = this.state
    const {
      classes, titulo, descripcion, urlImg, dispatch, id, loading, deleteCarousel
    } = this.props
    const buttons = (
      <div className={classes.absolute}>
        <Fab
          size="small"
          color="primary"
          aria-label="Add"
          onClick={this.handleForm(true)}
          className={classes.margin}
        >
          <CreateIcon />
        </Fab>
        <div className={classes.wrapper}>
          <Fab
            size="small"
            color="secondary"
            onClick={deleteCarousel(id)}
            disabled={loading}
            className={classes.margin}
          >
            <ClearIcon />
          </Fab>
          {loading && <CircularProgress size={47} className={classes.fabProgress} />}
        </div>
      </div>
    )
    return (
      <Fragment>
        <Card
          onMouseEnter={this.handleHover(true)}
          onMouseLeave={this.handleHover(false)}
          className={classes.card}
          raised
        >
          { isHover ? buttons : null }
          <SlideFormUpdate
            id={id}
            titulo={titulo}
            descripcion={descripcion}
            urlImg={urlImg}
            dispatch={dispatch}
            close={this.handleForm(false)}
            open={openForm}
          />
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              { titulo }
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              { descripcion }
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.cover}
            image={urlImg}
          />
        </Card>
        <br />
      </Fragment>
    )
  }
}

export default withStyles(styles)(CarouselItem)
