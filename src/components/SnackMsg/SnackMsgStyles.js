import green from '@material-ui/core/colors/green'
import amber from '@material-ui/core/colors/amber'

const styles = theme => ({
  success: {
    backgroundColor: green[600]
  },
  fatal: {
    backgroundColor: theme.palette.error.dark
  },
  failed: {
    backgroundColor: theme.palette.error.dark
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  },
  cont: {
    maxWidth: '100%'
  }
})

export default styles
