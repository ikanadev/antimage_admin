import React, { Fragment } from 'react'

import Contact from '../../components/Contact/Main'
import Link from '../../components/Link/Main'

const Info = props => (
  <Fragment>
    <Contact {...props} />
    <br />
    <br />
    <Link {...props} />
  </Fragment>
)

export default Info
