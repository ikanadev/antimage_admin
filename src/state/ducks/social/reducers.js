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
  [types.REQUEST_SOCIAL_SUCCESS]: (state, action) => action.payload.content.data,
  [types.UPDATE_SOCIAL_SUCCESS]: (state, action) => state.map(social => (
    parseInt(social.id, 10) === parseInt(action.payload.content.data.id, 10)
      ? action.payload.content.data
      : social
  ))
})

export default combineReducers({
  list
})
