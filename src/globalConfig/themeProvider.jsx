import React from 'react'
import {
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3949ab'
    },
    secondary: {
      main: '#d32f2f'
    }
  },
  typography: {
    fontFamily: ['Ubuntu', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    useNextVariants: true
  }
})
/**
* Set theme provider to Component
* @param {Component} Component component to inject theme
* @returns {function} function to inject theme to Component
*/
export default function themeProv(Component) {
  /**
  * function component that injects theme
  * @param {Object} props the props of the component
  * @returns {Component} returns a component
  */
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    )
  }
  return WithRoot
}
