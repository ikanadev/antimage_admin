import { combineReducers } from 'redux'

import { createReducer } from '../../../utils'
import * as types from './types'
/**
 * Default Shape
 {
   errorType: null,
   errorMsg: '',
   reqType: '',
   loading: false
 }
 */
const errorType = createReducer(null)({
  [types.REQUEST_WARNING]: () => 'warning',
  [types.REQUEST_FAILED]: () => 'failed',
  [types.REQUEST_FATAL]: () => 'fatal',
  [types.REQUEST_SUCCESS]: () => null,
  [types.RESET_ERROR]: () => null,
  [types.CREATE_ERROR]: (state, action) => action.payload.type
})

const errorMsg = createReducer('')({
  [types.REQUEST_WARNING]: (state, action) => action.payload.msg,
  [types.REQUEST_FAILED]: (state, action) => action.payload.msg,
  [types.REQUEST_FATAL]: (state, action) => action.payload.msg,
  [types.REQUEST_SUCCESS]: () => '',
  [types.RESET_ERROR]: () => '',
  [types.CREATE_ERROR]: (state, action) => action.payload.msg
})

const reqType = createReducer('')({
  [types.REQUEST_BEGIN]: (state, action) => action.payload.reqType,
  [types.REQUEST_SUCCESS]: () => '',
  [types.RESET_ERROR]: () => '',
  [types.CREATE_ERROR]: (state, action) => action.payload.req
})

const loading = createReducer(false)({
  [types.REQUEST_BEGIN]: () => true,
  [types.REQUEST_SUCCESS]: () => false,
  [types.REQUEST_FAILED]: () => false,
  [types.REQUEST_FATAL]: () => false,
  [types.REQUEST_WARNING]: () => false
})

export default combineReducers({
  errorType,
  errorMsg,
  reqType,
  loading
})
