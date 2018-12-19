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
  [types.REQUEST_WRITERS_SUCCESS]: (state, action) => action.payload.content.data,
  [types.POST_WRITER_SUCCESS]: (state, action) => [...state, action.payload.content.data],
  [types.UPDATE_WRITER_SUCCESS]: (state, action) => state.map(writer => (
    parseInt(writer.id, 10) === parseInt(action.payload.content.data.id, 10)
      ? action.payload.content.data
      : writer
  )),
  [types.DELETE_WRITER_SUCCESS]: (state, action) => state.filter(writer => (
    parseInt(writer.id, 10) !== parseInt(action.payload.content.data, 10)
  ))
})

export default combineReducers({
  list
})
