import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import Circle from './Circle'

import styles from './ParticlesStyles'

class Particles extends Component {
  constructor() {
    super()
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      particles: []
    }
    this.canvasRef = React.createRef()
    this.mountains = React.createRef()
    this.grass = React.createRef()
  }

  componentDidMount = () => {
    this.setDimensions()
    window.addEventListener('resize', this.setDimensions)
    this.drawCircles()

    const $mountains = this.mountains.current
    const $grass = this.grass.current
    const bgpM = getComputedStyle($mountains).backgroundPosition
    const bgpG = getComputedStyle($grass).backgroundPosition
    const om = parseInt(bgpM.substr(0, bgpM.search(' ')), 10)
    const og = parseInt(bgpG.substr(0, bgpG.search(' ')), 10)
    console.log(om, og)
    document.addEventListener('mousemove', (e) => {
      $mountains.style.backgroundPosition = `${om + e.clientX / 10}px 0px`
      $grass.style.backgroundPosition = `${og + e.clientX / 4}px 10px`
    })
  }

  componentWillUnmount = () => {
    clearInterval(this.interval)
  }

  drawCircles = () => {
    const circles = []
    const context = this.canvasRef.current.getContext('2d')
    const { width, height } = this.state
    const { maxParticles, drawInterval } = this.props
    for (let i = 0; i < maxParticles; i++) {
      circles.push(new Circle(context, width, height, drawInterval))
      circles[i].reset()
    }
    this.setState({
      particles: circles
    })
    this.interval = setInterval(this.draw, drawInterval)
  }

  draw = () => {
    const context = this.canvasRef.current.getContext('2d')
    const { particles, width, height } = this.state
    context.clearRect(0, 0, width, height)
    particles.forEach((particle) => {
      particle.fade()
      particle.move()
      particle.draw()
    })
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
        <canvas ref={this.canvasRef} className={classes.pixie} width={width} height={height}>
          You Browser not support canvas
        </canvas>
        <div ref={this.mountains} className={classes.mountains} />
        <div ref={this.grass} className={classes.grass} />
      </div>
    )
  }
}

export default withStyles(styles)(Particles)
