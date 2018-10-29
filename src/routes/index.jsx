import React from 'react'
import Login from '../views/Login/Login'
import mobileDetector from '../utils/mobileDetector'

const isMobile = mobileDetector()
const indexRoutes = [
  {
    id: 1, path: '/', name: 'Components', component: (() => (<Login isMobile={isMobile} />))
  }
]

export default indexRoutes
