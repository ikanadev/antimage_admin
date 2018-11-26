import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Button, CircularProgress
} from '@material-ui'

import styles from './AButtonStyles'

const AButton = ({
  classes, isLoading = false, onClick, text, isPrimary = true, fullWidth = true, type, icon
}) => (
  <div className={classes.wrapper}>
    <Button
      variant="contained"
      color={isPrimary ? 'primary' : 'secondary'}
      fullWidth={fullWidth}
      className={classes.button}
      onClick={onClick}
      disabled={isLoading}
      type={type}
    >
      {text}
      &nbsp;
      &nbsp;
      {icon}
    </Button>
    {
      isLoading
        ? <CircularProgress thickness={7} size={30} className={classes.buttonProgress} />
        : null
    }
  </div>
)

export default withStyles(styles)(AButton)
