import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import { withError } from '../../utils/enhancers'
import { socialTypes, socialOperations } from '../../state/ducks/social'

import Item from './Item'

const ItemCont = ({
  socialItems, loading, errorMsg, updateSocial
}) => (
  <Fragment>
    {errorMsg}
    {
      socialItems.map(socialItem => (
        <Item
          key={socialItem.id}
          loading={loading}
          updateSocial={updateSocial}
          {...socialItem}
        />
      ))
    }
  </Fragment>
)

const mapDispatchToProps = {
  updateSocial: socialOperations.updateSocial
}

export default connect(null, mapDispatchToProps)(
  withError(
    ItemCont,
    socialTypes.UPDATE_SOCIAL
  )
)
