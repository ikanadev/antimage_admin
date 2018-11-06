import React from 'react'
import Login from '../views/Login/Login'
import Protected from '../views/Protected/Protected'
import mobileDetector from '../utils/mobileDetector'

const isMobile = mobileDetector()
const indexRoutes = [
  {
    id: 1,
    path: '/',
    name: 'Components',
    exact: true,
    component: (() => (<Login isMobile={isMobile} />))
  },
  {
    id: 2,
    path: '/protected',
    name: 'Protected',
    exact: false,
    component: (() => (<Protected isMobile={isMobile} />))
  }
]

export default indexRoutes
