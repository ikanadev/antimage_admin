import { combineReducers } from 'redux'
import * as types from './types'
import { createReducer } from '../../../utils'

const error = createReducer(false)({
  [types.ERROR]: () => true,
  [types.DELETE_ERROR]: () => false
})
const message = createReducer('')({
  [types.ERROR]: (state, action) => action.payload.error,
  [types.DELETE_ERROR]: () => ''
})

export default combineReducers({
  error,
  message
})
