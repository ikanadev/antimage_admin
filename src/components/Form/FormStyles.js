import blue from '@material-ui/core/colors/blue'

const styles = theme => ({
  container: {
    position: 'fixed',
    zIndex: 3,
    height: '100%',
    transform: 'translateY(-10px)'
  },
  paperContainer: {
    padding: 70,
    paddingTop: 95,
    position: 'relative',
    transition: 'all 0.8s',
    borderRadius: '2% 20%',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 60,
      paddingBottom: 55,
      paddingLeft: 30,
      paddingRight: 30
    }
  },
  iconTop: {
    position: 'absolute',
    top: 20,
    left: 20
  },
  iconBot: {
    position: 'absolute',
    bottom: 20,
    right: 20
  },
  cardHidden: {
    opacity: 0,
    transform: 'translate3d(0, -60px, 0)'
  },
  input: {
    marginTop: '20px',
    padding: '10px 20px',
    background: 'white',
    boxShadow: '0 5px 12px 2px #888',
    borderRadius: '25px / 50%',
    transition: 'all 0.4s',
    '&:hover': {
      boxShadow: '0 3px 4px 2px #888',
      transform: 'scale(0.985)'
    }
  }
})
export default styles
