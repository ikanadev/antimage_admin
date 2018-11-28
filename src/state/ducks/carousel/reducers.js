import { combineReducers } from 'redux'
import * as types from './types'
import { createReducer } from '../../../utils'
/* State shape
{
    errorTypeRequest: null,
    errorMsgRequest: '',
    loadingRequest: false,
    carousels: []
}
*/

const loadingRequestReducer = createReducer(false)({
  [types.REQUEST_CAROUSEL_LIST]: () => true,
  [types.REQUEST_CAROUSEL_LIST_COMPLETED]: () => false,
  [types.REQUEST_CAROUSEL_LIST_FAILED]: () => false,
  [types.REQUEST_CAROUSEL_LIST_WARNING]: () => false,
  [types.REQUEST_CAROUSEL_LIST_FATAL]: () => false
})

const errorTypeRequestReducer = createReducer(null)({
  [types.REQUEST_CAROUSEL_LIST_FAILED]: () => 'fail',
  [types.REQUEST_CAROUSEL_LIST_WARNING]: () => 'warning',
  [types.REQUEST_CAROUSEL_LIST_FATAL]: () => 'fatal',
  [types.REQUEST_CAROUSEL_LIST_COMPLETED]: () => null,
  [types.REQUEST_CAROUSEL_LIST]: () => null,
  [types.RESET_REQUEST_ERROR]: () => null
})

const errorMsgRequestReducer = createReducer('')({
  [types.REQUEST_CAROUSEL_LIST_COMPLETED]: () => null,
  [types.REQUEST_CAROUSEL_LIST]: () => null,
  [types.RESET_REQUEST_ERROR]: () => null,
  [types.REQUEST_CAROUSEL_LIST_FAILED]: (state, action) => action.payload.usrmsg,
  [types.REQUEST_CAROUSEL_LIST_WARNING]: (state, action) => action.payload.usrmsg,
  [types.REQUEST_CAROUSEL_LIST_FATAL]: (state, action) => action.payload
})

const carouselReducer = createReducer([])({
  [types.REQUEST_CAROUSEL_LIST_COMPLETED]: (state, action) => action.payload.content.data
})

export default combineReducers({
  loadingRequest: loadingRequestReducer,
  errorTypeRequest: errorTypeRequestReducer,
  errorMsgRequest: errorMsgRequestReducer,
  carousels: carouselReducer
})
