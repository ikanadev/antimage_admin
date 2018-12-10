import { combineReducers } from 'redux'
import * as types from './types'
import { createReducer } from '../../../utils'
/* State shape
{
    carousels: []
}
*/

const carouselList = createReducer([])({
  [types.REQUEST_CAROUSEL_LIST_SUCCESS]: (state, action) => action.payload.content.data
  // [types.POST_CAROUSEL_COMPLETED]: (state, action) => [...state, action.payload]
})

export default combineReducers({
  list: carouselList
})
