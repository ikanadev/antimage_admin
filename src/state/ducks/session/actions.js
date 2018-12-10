import * as types from './types'

export const login = body => ({
  type: types.LOGIN,
  meta: {
    path: '/login',
    method: 'POST',
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

export const updateCarrer = (carrer) => {
  localStorage.setItem('carrer', JSON.stringify(carrer))
  return {
    type: types.UPDATE_CARRER,
    payload: carrer
  }
}
