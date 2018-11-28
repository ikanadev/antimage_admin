import * as types from './types'

export const requestCarouselList = body => ({
  type: types.REQUEST_CAROUSEL_LIST,
  meta: {
    async: true,
    blocking: true,
    path: '/carousel/',
    method: 'GET',
    body
  }
})

export const resetRequestError = () => ({
  type: types.RESET_REQUEST_ERROR
})
