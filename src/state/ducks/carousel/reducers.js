import { combineReducers } from 'redux'
import * as types from './types'
import { createReducer } from '../../../utils'
/* State shape
{
    errorTypeRequest: null,
    errorMsgRequest: '',
    loadingRequest: false,
    carousels: [],
    errorTypePost: null,
    errorMsgPost: '',
    loadingPost: false,
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
  [types.REQUEST_CAROUSEL_LIST_COMPLETED]: (state, action) => action.payload.content.data,
  [types.POST_CAROUSEL_COMPLETED]: (state, action) => [...state, action.payload]
})

const errorTypePost = createReducer(null)({
  [types.POST_CAROUSEL_FAILED]: () => 'fail',
  [types.POST_CAROUSEL_WARNING]: () => 'warning',
  [types.POST_CAROUSEL_FATAL]: () => 'fatal',
  [types.POST_CAROUSEL_COMPLETED]: () => null,
  [types.POST_CAROUSEL]: () => null,
  [types.RESET_POST_ERROR]: () => null
})

const errorMsgPost = createReducer('')({
  [types.POST_CAROUSEL_FAILED]: (state, action) => action.payload,
  [types.POST_CAROUSEL_WARNING]: (state, action) => action.payload,
  [types.POST_CAROUSEL_FATAL]: (state, action) => action.payload,
  [types.POST_CAROUSEL_COMPLETED]: () => '',
  [types.POST_CAROUSEL]: () => '',
  [types.RESET_POST_ERROR]: () => ''
})

const loadingPost = createReducer(false)({
/*   [types.POST_CAROUSEL_FAILED]: () => false,
  [types.POST_CAROUSEL_WARNING]: () => false,
  [types.POST_CAROUSEL_FATAL]: () => false,
  [types.POST_CAROUSEL_COMPLETED]: () => false, */
  [types.POST_CAROUSEL]: () => true
//  [types.RESET_POST_ERROR]: () => false
})

export default combineReducers({
  loadingRequest: loadingRequestReducer,
  errorTypeRequest: errorTypeRequestReducer,
  errorMsgRequest: errorMsgRequestReducer,
  carousels: carouselReducer,
  errorTypePost,
  errorMsgPost,
  loadingPost
})
