import * as types from './types'

export const requestCarouselList = () => ({
  type: types.REQUEST_CAROUSEL_LIST,
  meta: {
    path: '/carousel/',
    method: 'GET'
  }
})

export const postCarousel = body => ({
  type: types.POST_CAROUSEL,
  meta: {
    path: '/carousel/',
    method: 'POST',
    type: 'file',
    body
  }
})

export const updateCarousel = body => ({
  type: types.UPDATE_CAROUSEL,
  meta: {
    path: '/carousel/update',
    method: 'POST',
    type: 'file',
    body
  }
})

export const deleteCarousel = body => ({
  type: types.DELETE_CAROUSEL,
  meta: {
    path: '/carousel/',
    method: 'DELETE',
    body
  }
})
