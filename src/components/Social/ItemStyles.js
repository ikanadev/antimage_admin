import blue from '@material-ui/core/colors/blue'

export default () => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    paddingBottom: 7,
    paddingTop: 7,
    paddingLeft: 40,
    paddingRight: 40
  },
  iconCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    textAlign: 'left'
  },
  actionsCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 90,
    flex: 1
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
  },
  texto: {
    wordBreak: 'break-word',
    flex: 2,
    marginLeft: 25,
    marginRight: 25
  },
  estado: {
    flex: 1
  }
})
