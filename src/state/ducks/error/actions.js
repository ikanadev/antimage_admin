import * as types from './types'

export const error = msg => ({
  type: types.ERROR,
  payload: {
    message: msg
  }
})

export const delError = () => ({
  type: types.DELETE_ERROR
})
