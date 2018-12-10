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

export const postCarouselSuccess = item => ({
  type: types.POST_CAROUSEL_COMPLETED,
  payload: item
})

export const postCarousel = () => ({
  type: types.POST_CAROUSEL
})

export const setWarningError = warning => ({
  type: types.POST_CAROUSEL_WARNING,
  payload: warning
})

export const setFailedError = error => ({
  type: types.POST_CAROUSEL_FAILED,
  payload: error
})

export const setFatalError = error => ({
  type: types.POST_CAROUSEL_FATAL,
  payload: error
})

export const resetPostError = () => ({
  type: types.RESET_POST_ERROR
})
