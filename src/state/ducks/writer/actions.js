import * as types from './types'

export const requestWriters = () => ({
  type: types.REQUEST_WRITERS,
  meta: {
    path: '/writer/',
    method: 'GET'
  }
})

export const postWriter = body => ({
  type: types.POST_WRITER,
  meta: {
    path: '/writer/',
    method: 'POST',
    body
  }
})

export const updateWriter = body => ({
  type: types.UPDATE_WRITER,
  meta: {
    path: '/writer/',
    method: 'PUT',
    body
  }
})

export const deleteWriter = body => ({
  type: types.DELETE_WRITER,
  meta: {
    path: '/writer/',
    method: 'DELETE',
    body
  }
})
