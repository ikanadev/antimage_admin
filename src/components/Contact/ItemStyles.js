import blue from '@material-ui/core/colors/blue'

export default () => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 40,
    paddingRight: 40
  },
  actionsCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 90
  },
  itemText: {
    display: 'inline'
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
