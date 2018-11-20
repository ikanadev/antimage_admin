import React from 'react'
import Login from '../views/Login/Login'
import Protected from '../views/Protected/Protected'
import mobileDetector from '../utils/mobileDetector'
import withAuthentication from '../utils/enhancers/withAuthentication'

const isMobile = mobileDetector()
const indexRoutes = [
  {
    id: 1,
    path: '/login',
    name: 'Components',
    exact: true,
    component: (() => (<Login isMobile={isMobile} />))
  },
  {
    id: 2,
    path: '/',
    name: 'Protected',
    exact: true,
    component: withAuthentication((() => (<Protected isMobile={isMobile} />)))
  }
]

export default indexRoutes
