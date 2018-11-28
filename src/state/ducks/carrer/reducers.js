import { combineReducers } from 'redux'
import * as types from './types'
import { createReducer } from '../../../utils'
/* State shape
{
    errorType: null,
    errorMsg: '',
    loading: false
}
*/

const loadingReducer = createReducer(false)({
  [types.UPDATE_CARRER_DATA]: () => true,
  [types.UPDATE_CARRER_DATA_COMPLETED]: () => false,
  [types.UPDATE_CARRER_DATA_FAILED]: () => false,
  [types.UPDATE_CARRER_DATA_WARNING]: () => false,
  [types.UPDATE_CARRER_DATA_FATAL]: () => false
})

const errorTypeReducer = createReducer(null)({
  [types.UPDATE_CARRER_DATA_FAILED]: () => 'fail',
  [types.UPDATE_CARRER_DATA_WARNING]: () => 'warning',
  [types.UPDATE_CARRER_DATA_FATAL]: () => 'fatal',
  [types.UPDATE_CARRER_DATA_COMPLETED]: () => null,
  [types.UPDATE_CARRER_DATA]: () => null,
  [types.RESET_ERROR]: () => null
})

const errorMsgReducer = createReducer('')({
  [types.UPDATE_CARRER_DATA_COMPLETED]: () => null,
  [types.UPDATE_CARRER_DATA]: () => null,
  [types.RESET_ERROR]: () => null,
  [types.UPDATE_CARRER_DATA_FAILED]: (state, action) => action.payload,
  [types.UPDATE_CARRER_DATA_WARNING]: (state, action) => action.payload,
  [types.UPDATE_CARRER_DATA_FATAL]: (state, action) => action.payload
})

export default combineReducers({
  loading: loadingReducer,
  errorType: errorTypeReducer,
  errorMsg: errorMsgReducer
})
