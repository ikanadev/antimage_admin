import * as types from './types'

export const login = body => ({
  type: types.LOGIN,
  meta: {
    path: '/login',
    method: 'POST',
    token: false,
    body
  }
})

export const logout = () => ({
  type: types.LOGOUT
})

export const updateUser = body => ({
  type: types.UPDATE_USER,
  meta: {
    path: '/admin/',
    method: 'PUT',
    body
  }
})

export const updateCarrer = body => ({
  type: types.UPDATE_CARRER,
  meta: {
    path: '/carrer/',
    method: 'POST',
    type: 'file',
    body
  }
})
