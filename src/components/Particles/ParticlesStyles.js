import mountains from '../../assets/images/mountains.png'
import building from '../../assets/images/building.png'

const styles = () => ({
  container: {
    overflow: 'hidden',
    position: 'relative'
  },
  pixie: {
    zIndex: 0,
    background: 'gradient(linear, left top, left bottom, color-stop(0%,#040429), color-stop(100%,#257eb7))'
  },
  mountains: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: 190,
    zIndex: 1,
    background: `url(${mountains}) repeat-x left 10px`
  },
  grass: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: 195,
    zIndex: 2,
    background: `url(${building}) repeat-x left 10px`
  }
})
export default styles
