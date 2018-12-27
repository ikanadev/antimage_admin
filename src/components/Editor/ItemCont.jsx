import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import { withError } from '../../utils/enhancers'
import { writerOperations, writerTypes } from '../../state/ducks/writer'

import {
  Table, TableHead, TableCell, TableRow, TableBody
} from '@material-ui'

import Item from './Item'

const ItemCont = ({
  writers, loading, errorMsg, deleteWriter, dispatch
}) => (
  <Fragment>
    { errorMsg }
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Nombres</TableCell>
          <TableCell>Apellidos</TableCell>
          <TableCell>Correo</TableCell>
          <TableCell>Acciones</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          writers.map(writer => (
            <Item
              key={writer.id}
              loading={loading}
              deleteWriter={deleteWriter}
              dispatch={dispatch}
              {...writer}
            />
          ))
        }
      </TableBody>
    </Table>
  </Fragment>
)

const mapDispatchToProps = {
  deleteWriter: writerOperations.deleteWriter
}

export default connect(null, mapDispatchToProps)(
  withError(
    ItemCont,
    writerTypes.DELETE_WRITER
  )
)
