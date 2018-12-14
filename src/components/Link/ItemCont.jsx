import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {
  Card
} from '@material-ui'

import { linkOperations, linkTypes } from '../../state/ducks/link'
import { withError } from '../../utils/enhancers'

import Item from './Item'


const ItemCont = ({
  links, errorMsg, loading, updateLink
}) => (
  <Fragment>
    <Card style={{ width: '100%' }}>
      {errorMsg}
      {
        links.map(link => (
          <Item
            key={link.id}
            {...link}
            loadingUpdate={loading}
            updateLink={updateLink}
          />
        ))
      }
    </Card>
  </Fragment>
)

const mapDispatchToProps = {
  updateLink: linkOperations.updateLink
}

export default connect(null, mapDispatchToProps)(
  withError(ItemCont, linkTypes.UPDATE_LINK)
)
