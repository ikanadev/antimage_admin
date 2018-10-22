import React from 'react'
import { hot } from 'react-hot-loader'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {
  createStore,
  applyMiddleware
} from 'redux'

import indexRoutes from './routes/index.jsx'
// import themeProv from './assets/themeProvider'
// En este archivo van todas las configuraciones globales de la app
// ej. redux provider, context, etc
import './assets/fonts.css'

import rootReducer from './reducers'

const middleware = applyMiddleware(thunk, logger)
const store = createStore(rootReducer, middleware)

const hist = createBrowserHistory()

const App = () => (
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map(prop => (
          <Route path={prop.path} key={prop.id} component={prop.component} />
        ))}
      </Switch>
    </Router>
  </Provider>
)
// export default hot(module)(themeProv(App))
export default hot(module)(App)
