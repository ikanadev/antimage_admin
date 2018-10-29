import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import styles from './ParticlesStyles'

class Particles extends Component {
  constructor() {
    super()
    this.state = {
      width: 0,
      height: 0
    }
  }

  componentDidMount = () => {
    this.setDimensions()
    window.addEventListener('resize', this.setDimensions)
  }

  setDimensions = () => {
    const width = window.innerWidth
    const height = window.innerHeight
    this.setState({
      width,
      height
    })
  }

  render() {
    const { classes } = this.props
    const { width, height } = this.state
    const containerStyles = {
      width: `${width}px`,
      height: `${height}px`
    }
    return (
      <div className={classes.container} style={containerStyles}>
        <canvas className={classes.pixie} width={width} height={height}>
          You Browser not support canvas
        </canvas>
        <div className={classes.mountains} />
        <div className={classes.grass} />
      </div>
    )
  }
}

export default withStyles(styles)(Particles)
