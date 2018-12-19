import React, { Component } from 'react'
import { connect } from 'react-redux'

import { CircularProgress, Card } from '@material-ui'

import { withError } from '../../utils/enhancers'
import { socialOperations, socialTypes } from '../../state/ducks/social'

import PaperCont from '../PaperCont/PaperCont'
import ItemCont from './ItemCont'

class Social extends Component {
  componentDidMount = () => {
    const { socialItems, requestSocial } = this.props
    if (socialItems.length === 0) {
      requestSocial()
    }
  }

  render() {
    const {
      socialItems, loading, errorMsg
    } = this.props
    return (
      <PaperCont
        title="Redes Sociales"
      >
        { errorMsg }
        { loading && <CircularProgress size={70} /> }
        <Card style={{ width: '100%' }}>
          <ItemCont socialItems={socialItems} />
        </Card>
      </PaperCont>
    )
  }
}

const mapStateToProps = state => ({
  socialItems: state.social.list
})

const mapDispatchToProps = {
  requestSocial: socialOperations.requestSocial
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withError(
    Social,
    socialTypes.REQUEST_SOCIAL
  )
)
