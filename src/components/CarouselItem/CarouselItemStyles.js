import red from '@material-ui/core/colors/red'

export default theme => ({
  card: {
    display: 'flex',
    position: 'relative',
    width: '80%',
    justifyContent: 'space-between',
    minHeight: 180
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    textAlign: 'center',
    flexGrow: 1
  },
  cover: {
    width: 300
  },
  margin: {
    margin: theme.spacing.unit
  },
  absolute: {
    position: 'absolute',
    top: 0,
    right: 0
  },
  wrapper: {
    position: 'relative',
    display: 'inline'
  },
  fabProgress: {
    color: red[500],
    position: 'absolute',
    top: -13,
    left: 4,
    zIndex: 1
  }
})
