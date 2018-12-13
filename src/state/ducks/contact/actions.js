import * as types from './types'

export const requestContactList = () => ({
  type: types.REQUEST_CONTACT_LIST,
  meta: {
    path: '/contact/',
    method: 'GET'
  }
})

export const postContact = body => ({
  type: types.POST_CONTACT,
  meta: {
    path: '/contact/',
    method: 'POST',
    body
  }
})

export const updateContact = body => ({
  type: types.UPDATE_CONTACT,
  meta: {
    path: '/contact/',
    method: 'PUT',
    body
  }
})

export const deleteContact = body => ({
  type: types.DELETE_CONTACT,
  meta: {
    path: '/contact/',
    method: 'DELETE',
    body
  }
})
