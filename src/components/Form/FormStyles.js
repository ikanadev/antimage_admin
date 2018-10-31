const styles = () => ({
  container: {
    position: 'fixed',
    zIndex: 3,
    height: '100%',
    transform: 'translateY(-10px)'
  },
  paperContainer: {
    padding: 70,
    position: 'relative'
  },
  iconTop: {
    position: 'absolute',
    top: 15,
    left: 15
  },
  iconBot: {
    position: 'absolute',
    bottom: 15,
    right: 15
  },
  cardHidden: {
    opacity: 0,
    transform: 'translate3d(0, -60px, 0)'
  },
  input: {
    marginTop: '20px',
    padding: '10px 20px',
    background: 'white',
    boxShadow: '0 5px 8px 2px #888',
    borderRadius: '25px / 50%'
  }
})
export default styles
