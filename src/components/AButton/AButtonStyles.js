import blue from '@material-ui/core/colors/blue'

const styles = theme => ({
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative'
  },
  button: {
    boxShadow: '0 5px 8px 2px #888',
    marginTop: 32,
    marginBottom: 25,
    borderRadius: '20px / 50%',
    padding: '10px 20px'
  },
  buttonProgress: {
    color: blue[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
})
export default styles
