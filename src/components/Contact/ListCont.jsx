import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {
  Card
} from '@material-ui'

import { contactOperations, contactTypes } from '../../state/ducks/contact'
import { withError } from '../../utils/enhancers'

import Item from './Item'


const ListCont = ({
  contacts, icons, errorMsg, loading, updateContact
}) => (
  <Fragment>
    <Card style={{ width: '100%' }}>
      {errorMsg}
      {
        contacts.map(contact => (
          <Item
            key={contact.id}
            {...contact}
            icons={icons}
            loadingUpdate={loading}
            updateContact={updateContact}
          />
        ))
      }
    </Card>
  </Fragment>
)

const mapDispatchToProps = {
  updateContact: contactOperations.updateContact
}

export default connect(null, mapDispatchToProps)(
  withError(ListCont, contactTypes.UPDATE_CONTACT)
)
