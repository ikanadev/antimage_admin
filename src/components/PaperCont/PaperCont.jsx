import React from 'react'
import {
  Paper, Typography, Tooltip, Fab, Divider
} from '@material-ui'
import AddIcon from '@material-ui/icons/Add'

import styles from './PaperContStyles'
/*
props:
onClick={function}
title={string}
subtitle={string}
tooltip={string}
*/
const PaperCont = ({
  onClick = null, title, subtitle = '', tooltip = '', children
}) => (
  <Paper style={styles.container} elevation={8}>
    <div style={styles.titleContainer}>
      <Typography variant="h5" component="h3">
        { title }
      </Typography>
      {
        onClick && (
          <Tooltip title={tooltip} placement="top">
            <Fab
              size="small"
              color="primary"
              style={styles.addButton}
              onClick={onClick}
            >
              <AddIcon />
            </Fab>
          </Tooltip>
        )
      }
    </div>
    {
      subtitle !== '' && (
        <Typography variant="subtitle2">
          { subtitle }
        </Typography>
      )
    }
    <Divider />
    <br />
    {
      children
    }
  </Paper>
)
export default PaperCont
