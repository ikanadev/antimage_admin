import * as types from './types'

export const login = body => ({
  type: types.LOGIN,
  meta: {
    async: true,
    blocking: true,
    path: '/login',
    method: 'POST',
    body
  }
})

export const logout = () => ({
  type: types.LOGOUT
})

export const initializeSession = () => ({
  type: types.INITIALIZE
})

export const setRedirectAfterLogin = () => ({
  type: types.SET_REDIRECT_AFTER_LOGIN
})
