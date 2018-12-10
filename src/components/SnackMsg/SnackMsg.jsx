import React from 'react'
import classNames from 'classnames'
import {
  IconButton,
  SnackbarContent
} from '@material-ui'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import CloseIcon from '@material-ui/icons/Close'
import WarningIcon from '@material-ui/icons/Warning'
import { withStyles } from '@material-ui/core/styles'

import styles from './SnackMsgStyles'

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  fatal: ErrorIcon,
  failed: InfoIcon
}

function SnackMsg(props) {
  const {
    classes, className, message, onClose, variant
  } = props
  const Icon = variantIcon[variant]

  return (
    <SnackbarContent
      className={classNames(classes[variant], className, classes.cont)}
      aria-describedby="client-snackbar"
      message={(
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          <h3>
            {message}
          </h3>
        </span>
      )}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
    />
  )
}

export default withStyles(styles)(SnackMsg)
