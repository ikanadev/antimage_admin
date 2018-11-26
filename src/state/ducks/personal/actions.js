import * as types from './types'

export const update = body => ({
  type: types.UPDATE_PERSONAL_DATA,
  meta: {
    async: true,
    blocking: true,
    path: '/admin/',
    method: 'PUT',
    body
  }
})

export const resetError = () => ({
  type: types.RESET_ERROR
})
