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

export const resetError = () => ({
  type: types.RESET_ERROR
})

export const updateUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
  return {
    type: types.UPDATE_USER,
    payload: user
  }
}

export const updateCarrer = (carrer) => {
  localStorage.setItem('carrer', JSON.stringify(carrer))
  return {
    type: types.UPDATE_CARRER,
    payload: carrer
  }
}
