import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'

import indexRoutes from './routes/index.jsx'
import themeProv from './globalConfig/themeProvider'
import configureStore from './globalConfig/configureStore'
// En este archivo van todas las configuraciones globales de la app
// ej. redux provider, context, etc
import './assets/fonts.css'

const store = configureStore({})
console.log(store.getState())
/* if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers') // eslint-disable-line
    store.replaceReducer(nextRootReducer)
  })
} */

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        {indexRoutes.map(prop => (
          <Route exact={prop.exact} path={prop.path} key={prop.id} component={prop.component} />
        ))}
      </Switch>
    </Router>
  </Provider>
)
export default hot(module)(themeProv(App))
// export default hot(module)(App)
