import { combineReducers } from 'redux'
import * as types from './types'
import { createReducer } from '../../../utils'
/* State shape
{
    carousels: []
}
*/

const carouselList = createReducer([])({
  [types.REQUEST_CAROUSEL_LIST_SUCCESS]: (state, action) => action.payload.content.data,
  [types.POST_CAROUSEL_SUCCESS]: (state, action) => [...state, action.payload.content.data],
  [types.UPDATE_CAROUSEL_SUCCESS]: (state, action) => state.map(carousel => (
    parseInt(action.payload.content.data.id, 10) === parseInt(carousel.id, 10)
      ? action.payload.content.data
      : carousel)),
  [types.DELETE_CAROUSEL_SUCCESS]: (state, action) => state.filter(carousel => (
    parseInt(action.meta.body.id, 10) !== parseInt(carousel.id, 10)
  ))
})

export default combineReducers({
  list: carouselList
})
