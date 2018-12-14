import { combineReducers } from 'redux'

import { createReducer } from '../../../utils'
import * as types from './types'

/*
default state:
{
  list: []
}
*/
const list = createReducer([])({
  [types.REQUEST_LINKS_SUCCESS]: (state, action) => action.payload.content.data,
  [types.POST_LINK_SUCCESS]: (state, action) => [...state, action.payload.content.data],
  [types.UPDATE_LINK_SUCCESS]: (state, action) => state.map(link => (
    parseInt(link.id, 10) === parseInt(action.payload.content.data.id, 10)
      ? action.payload.content.data
      : link
  )),
  [types.DELETE_LINK_SUCCESS]: (state, action) => state.filter(link => (
    parseInt(link.id, 10) !== parseInt(action.payload.content.data, 10)
  ))
})

export default combineReducers({
  list
})
