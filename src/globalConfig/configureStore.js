import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

const middleware = applyMiddleware(thunk, logger)

export default function configureStore() {
  const store = createStore(rootReducer, middleware)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers') // eslint-disable-line
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
