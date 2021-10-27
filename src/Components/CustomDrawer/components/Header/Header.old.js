import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ArrowBack } from '@material-ui/icons'
import { Typography } from '@material-ui/core'
import CustomTooltip from '../../../CustomTooltip'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.colors.background.white,
    padding: 24,
    [theme.breakpoints.down('xs')]: {
      padding: 16
    }
  },
  left: {
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    cursor: 'pointer',
    fontSize: 24,
    color: theme.palette.colors.black.default
  },
  title: {
    marginLeft: 24,
    fontSize: 20,
    color: theme.palette.colors.black.default,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 15
    }
  }
}))

const Header = (props) => {
  const { onClose, title, backArrowText, rightElements } = props
  const classes = useStyles()

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.left}>
          <CustomTooltip title={backArrowText}>
            <ArrowBack onClick={onClose} className={classes.icon} />
          </CustomTooltip>
          <Typography noWrap className={classes.title}>
            {title}
          </Typography>
        </div>
        {rightElements}
      </div>
    </div>
  )
}

export default Header
