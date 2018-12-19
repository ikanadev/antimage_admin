import React, { Fragment } from 'react'

import Contact from '../../components/Contact/Main'
import Link from '../../components/Link/Main'
import Social from '../../components/Social'

const Info = props => (
  <Fragment>
    <Contact {...props} />
    <br />
    <br />
    <Link {...props} />
    <br />
    <br />
    <Social {...props} />
  </Fragment>
)

export default Info
