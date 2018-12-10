import * as types from './types'

export const requestCarouselList = () => ({
  type: types.REQUEST_CAROUSEL_LIST,
  meta: {
    path: '/carousel/',
    method: 'GET'
  }
})

export const postCarousel = () => ({
  type: types.POST_CAROUSEL
})
