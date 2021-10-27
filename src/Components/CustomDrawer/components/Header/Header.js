import IconButton from '@material-ui/core/IconButton'
import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Close } from '@material-ui/icons'
import { Typography } from '@material-ui/core'
import CustomTooltip from '../../../CustomTooltip'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  right: {
    display: 'flex',
    alignItems: 'center'
  },
  closeBtn: {
    padding: 8,
    marginLeft: 10
  },
  icon: {
    fontSize: 24,
    color: theme.palette.colors.black.default
  },
  title: {
    fontWeight: 500,
    fontSize: 20,
    lineHeight: '25px',
    color: theme.palette.colors.black[0]
  }
}))

const Header = (props) => {
  const { onClose, title, backArrowText, rightElements, withCloseBtn } = props
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography noWrap className={classes.title}>
        {title}
      </Typography>
      <div className={classes.right}>
        {rightElements}
        {withCloseBtn && (
          <CustomTooltip title={backArrowText}>
            <IconButton onClick={onClose} className={classes.closeBtn}>
              <Close className={classes.icon} />
            </IconButton>
          </CustomTooltip>
        )}
      </div>
    </div>
  )
}

export default memo(Header)
