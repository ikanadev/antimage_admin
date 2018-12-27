import blue from '@material-ui/core/colors/blue'

export default () => ({
  actionsCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 90
  },
  wrapper: {
    position: 'relative',
    display: 'inline'
  },
  fabProgress: {
    color: blue[500],
    position: 'absolute',
    top: -3,
    left: -4,
    zIndex: 1
  }
})
