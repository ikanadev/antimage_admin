import React from 'react'
import Login from '../views/Login/Login'
import Protected from '../views/Protected/Protected'
import Home from '../views/Home'
import mobileDetector from '../utils/mobileDetector'
import withAuthentication from '../utils/enhancers/withAuthentication'

const isMobile = mobileDetector()
const indexRoutes = [
  {
    id: 0,
    path: '/',
    name: 'Home',
    exact: true,
    component: () => <Home />
  },
  {
    id: 1,
    path: '/login',
    name: 'Components',
    exact: true,
    component: (() => (<Login isMobile={isMobile} />))
  },
  {
    id: 2,
    path: '/admin',
    name: 'Protected',
    exact: false,
    component: withAuthentication((props => (
      <Protected {...props} isMobile={isMobile} />
    )))
  }
]

export default indexRoutes
