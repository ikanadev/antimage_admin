import * as types from './types'

export const requestSocial = () => ({
  type: types.REQUEST_SOCIAL,
  meta: {
    path: '/social/',
    method: 'GET'
  }
})

export const updateSocial = body => ({
  type: types.UPDATE_SOCIAL,
  meta: {
    path: '/social/',
    method: 'PUT',
    body
  }
})
