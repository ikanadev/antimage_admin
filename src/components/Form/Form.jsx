import React, { Component } from 'react'
import {
  Grid, Paper, Typography, Input, InputAdornment, IconButton
} from '@material-ui'
import { withStyles } from '@material-ui/core/styles'
import AlternateEmailIcon from '@material-ui/icons/EmailOutlined'
import VpnKeyIcon from '@material-ui/icons/VpnKeyOutlined'
import VisibilityIcon from '@material-ui/icons/VisibilityOutlined'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOffOutlined'

import Engineer from '../Logos/Engineer'
import Settings from '../Logos/Settings'

import styles from './FormStyles'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      emailFocus: false,
      passwordFocus: false,
      cardAnimation: 'cardHidden',
      showPassword: false
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
      [`${name}Focus`]: value !== ''
    })
  }

  handleFocus = value => (e) => {
    const { name } = e.target
    this.setState(prevState => (Object.assign(
      {
        emailFocus: prevState.email !== '' || false,
        passwordFocus: prevState.password !== '' || false
      },
      {
        [`${name}Focus`]: (prevState.email !== '' || prevState.password !== '') ? true : value
      }
    )))
  }

  handleShowPassword = () => {
    this.setState(preState => ({
      showPassword: !preState.showPassword
    }))
  }

  render() {
    const { classes } = this.props
    const {
      email, password, emailFocus, passwordFocus, showPassword
    } = this.state
    const emailColor = emailFocus ? 'primary' : 'disabled'
    const passwordColor = passwordFocus ? 'primary' : 'disabled'
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
            <br />
            <form>
              <Input
                fullWidth
                disableUnderline
                onChange={this.handleChange}
                onFocus={this.handleFocus(true)}
                onBlur={this.handleFocus(false)}
                value={email}
                placeholder="   Correo"
                className={classes.input}
                inputProps={{
                  name: 'email'
                }}
                startAdornment={(
                  <InputAdornment position="start">
                    <AlternateEmailIcon color={emailColor} />
                  </InputAdornment>
                )}
              />
              <Input
                fullWidth
                disableUnderline
                onChange={this.handleChange}
                onFocus={this.handleFocus(true)}
                onBlur={this.handleFocus(false)}
                value={password}
                placeholder="   Contraseña"
                className={classes.input}
                inputProps={{
                  name: 'password'
                }}
                type={showPassword ? 'text' : 'password'}
                startAdornment={(
                  <InputAdornment position="start">
                    <VpnKeyIcon color={passwordColor} />
                  </InputAdornment>
                )}
                endAdornment={(
                  <InputAdornment position="end">
                    <IconButton
                      onClick={this.handleShowPassword}
                    >
                      {
                        showPassword
                          ? <VisibilityIcon color={passwordColor} />
                          : <VisibilityOffIcon color={passwordColor} />
                      }
                    </IconButton>
                  </InputAdornment>
                )}
              />
            </form>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Form)
