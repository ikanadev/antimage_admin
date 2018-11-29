import React, { Fragment, Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Card, CardContent, CardMedia, Typography, Fab
} from '@material-ui'

import ClearIcon from '@material-ui/icons/Clear'
import CreateIcon from '@material-ui/icons/Create'

import styles from './CarouselItemStyles'

class CarouselItem extends Component {
  constructor() {
    super()
    this.state = {
      isHover: false
    }
  }

  handleHover = status => () => {
    this.setState({
      isHover: status
    })
  }

  render() {
    const { isHover } = this.state
    const {
      classes, titulo, descripcion, urlImg
    } = this.props
    const buttons = (
      <div className={classes.absolute}>
        <Fab size="small" color="primary" aria-label="Add" className={classes.margin}>
          <CreateIcon />
        </Fab>
        <Fab size="small" color="secondary" aria-label="Add" className={classes.margin}>
          <ClearIcon />
        </Fab>
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
            title="Live from space album cover"
          />
        </Card>
        <br />
      </Fragment>
    )
  }
}

export default withStyles(styles)(CarouselItem)
