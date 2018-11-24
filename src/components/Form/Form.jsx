import React, { Component } from 'react'
import {
  Grid, Paper, Typography, Input, InputAdornment, IconButton, Button, CircularProgress
} from '@material-ui'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import AlternateEmailIcon from '@material-ui/icons/EmailOutlined'
import VpnKeyIcon from '@material-ui/icons/VpnKeyOutlined'
import VisibilityIcon from '@material-ui/icons/VisibilityOutlined'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOffOutlined'
import SendIcon from '@material-ui/icons/SendOutlined'

import SnackMsg from '../SnackMsg/SnackMsg'
import Engineer from '../Logos/Engineer'
import Settings from '../Logos/Settings'

import styles from './FormStyles'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      correo: '',
      password: '',
      correoFocus: false,
      passwordFocus: false,
      cardAnimation: 'cardHidden',
      showPassword: false
    }
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        cardAnimation: ''
      })
    }, 700)
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
        correoFocus: prevState.correo !== '' || false,
        passwordFocus: prevState.password !== '' || false
      },
      {
        [`${name}Focus`]: (prevState.correo !== '' || prevState.password !== '') ? true : value
      }
    )))
  }

  handleShowPassword = () => {
    this.setState(preState => ({
      showPassword: !preState.showPassword
    }))
  }

  handleSubmit = () => {
    const { login } = this.props
    const body = (({ correo, password }) => ({ correo, password }))(this.state)
    login(body)
  }

  render() {
    const {
      classes, isLoading, errorMsg, errorType, resetError
    } = this.props
    const {
      correo, password, correoFocus, passwordFocus, showPassword, cardAnimation
    } = this.state
    const correoColor = correoFocus ? 'primary' : 'disabled'
    const passwordColor = passwordFocus ? 'primary' : 'disabled'
    let snack = null
    if (errorType) {
      snack = (
        <SnackMsg
          variant={errorType}
          message={errorMsg}
          onClose={resetError}
        />
      )
    }

    return (
      <Grid container className={classes.container} justify="center" alignItems="center">
        <Grid item xs={10} md={6} lg={4} xl={3}>
          <Paper className={classNames(classes.paperContainer, classes[cardAnimation])} elevation={5}>
            <div className={classes.iconTop}>
              <Engineer angularLimit={360} thetaDelta={0.8} color1="#FFA64D" color2="#cecece" width="25%" />
            </div>
            <div className={classes.iconBot}>
              <Settings angularLimit={360} thetaDelta={0.8} color1="#FFA64D" color2="#cecece" width={60} />
            </div>
            <Typography align="center" variant="h4" component="h3" color="primary">
              Antimage Administración
            </Typography>
            <br />
            <br />
            { snack }
            <br />
            <form>
              <Input
                fullWidth
                disableUnderline
                onChange={this.handleChange}
                onFocus={this.handleFocus(true)}
                onBlur={this.handleFocus(false)}
                value={correo}
                placeholder="   Correo"
                className={classes.input}
                inputProps={{
                  name: 'correo'
                }}
                startAdornment={(
                  <InputAdornment position="start">
                    <AlternateEmailIcon color={correoColor} />
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
              <div className={classes.wrapper}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  className={classes.button}
                  onClick={this.handleSubmit}
                  disabled={isLoading}
                  type="submit"
                >
                  Ingresar
                  <SendIcon className={classes.rightIcon} />
                </Button>
                {
                  isLoading
                    ? <CircularProgress thickness={7} size={30} className={classes.buttonProgress} />
                    : null
                }
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Form)
