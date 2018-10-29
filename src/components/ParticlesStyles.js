import { fade } from '@material-ui/core/styles/colorManipulator'
/* #container {
  overflow:hidden;
  position:relative;
}
#pixie {
  z-index:0;
  background:-moz-linear-gradient(top, #040429, #257eb7);
  background:-webkit-gradient(linear, left top, left bottom,
  color-stop(0%,#040429), color-stop(100%,#257eb7));
}
#mountains, #grass {
  width:100%;
  position:absolute;
  bottom:0;
}
#mountains {
  height:156px;
  z-index:1;
  background:url(mountains.png) repeat-x 0 0;
}
#grass {
  height:62px;
  z-index:2;
  background:url(grass.png) repeat-x left 10px;
} */
const styles = theme => ({
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
    height: 156,
    zIndex: 1,
    background: 'url(http://timothypoon.com/blog/demos/canvas-particle-parallax/mountains.png) repeat-x left 10px'
  },
  grass: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: 62,
    zIndex: 2,
    background: 'url(http://timothypoon.com/blog/demos/canvas-particle-parallax/grass.png) repeat-x left 10px'
  },
  title: {
    fontFamily: 'Fredoka',
    margin: theme.spacing.unit * 5,
    color: theme.palette.text.primary,
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing.unit * 3,
      width: 'auto',
      textAlign: 'center'
    }
  },
  search: {
    margin: theme.spacing.unit * 5,
    position: 'relative',
    borderRadius: '18px/50%',
    overflow: 'hidden',
    transition: 'all 0.25s',
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0),
      boxShadow: '0px 0px 7px 3px #999'
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing.unit * 3,
      marginTop: 0,
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    fontFamily: 'Slabo',
    fontSize: '27px',
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    width: '100%',
    transition: 'all 0.25s',
    '&:focus': {
      backgroundColor: fade(theme.palette.common.white, 1),
      boxShadow: '0px 0px 7px 3px #999',
      borderRadius: '18px/50%'
    },
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200
      }
    }
  }
})
export default styles
