import { combineReducers } from 'redux'
import * as types from './types'
import { createReducer } from '../../../utils'

/*
default shape
{
  list: []
}
*/

const list = createReducer([])({
  [types.REQUEST_CONTACT_LIST_SUCCESS]: (state, action) => action.payload.content.data,
  [types.POST_CONTACT_SUCCESS]: (state, action) => [...state, action.payload.content.data],
  [types.UPDATE_CONTACT_SUCCESS]: (state, action) => state.map(contact => (
    parseInt(contact.id, 10) === parseInt(action.payload.content.data.id, 10)
      ? action.payload.content.data
      : contact
  )),
  [types.DELETE_CONTACT_SUCCESS]: (state, action) => state.filter(contact => (
    parseInt(contact.id, 10) !== parseInt(action.meta.body.id, 10)
  ))
})

export default combineReducers({
  list
})
