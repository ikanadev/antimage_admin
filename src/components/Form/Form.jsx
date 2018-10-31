import React, { Component } from 'react'
import {
  Grid, Paper, Typography
} from '@material-ui'
import { withStyles } from '@material-ui/core/styles'

import Engineer from '../Logos/Engineer'
import Settings from '../Logos/Settings'

import styles from './FormStyles'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      correo: 'hola',
      password: 'mundo'
    }
  }

  render() {
    const { classes } = this.props
    const { correo, password } = this.state
    return (
      <Grid container className={classes.container} justify="center" alignItems="center">
        <Grid item xs={10} md={6} lg={4} xl={3}>
          <Paper className={classes.paperContainer} elevation={5}>
            <div className={classes.iconTop}>
              <Engineer angularLimit={360} thetaDelta={0.8} color1="#FFA64D" color2="#cecece" width={70} />
            </div>
            <div className={classes.iconBot}>
              <Settings angularLimit={360} thetaDelta={0.8} color1="#FFA64D" color2="#cecece" width={70} />
            </div>
            <Typography align="center" variant="h4" component="h3">
              Ingresar al Sistema
            </Typography>
            <Typography component="p">
              { password }
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Form)
