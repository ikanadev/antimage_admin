import * as types from './types'

export const requestLinks = () => ({
  type: types.REQUEST_LINKS,
  meta: {
    path: '/link/',
    method: 'GET'
  }
})

export const postLink = body => ({
  type: types.POST_LINK,
  meta: {
    path: '/link/',
    method: 'POST',
    body
  }
})

export const updateLink = body => ({
  type: types.UPDATE_LINK,
  meta: {
    path: '/link/',
    method: 'PUT',
    body
  }
})

export const deleteLink = body => ({
  type: types.DELETE_LINK,
  meta: {
    path: '/link/',
    method: 'DELETE',
    body
  }
})
