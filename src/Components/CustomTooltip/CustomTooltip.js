import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Tooltip } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  tooltip: {
    fontSize: 14
  }
}))

function CustomTooltip(props) {
  const {
    children,
    title,
    placement = 'top',
    className,
    onClick,
    ...others
  } = props
  const classes = useStyles()

  if (!title) return children

  return (
    <Tooltip
      onClick={onClick}
      className={className}
      title={title}
      placement={placement}
      classes={{
        tooltip: classes.tooltip
      }}
      {...others}
    >
      <div>{children}</div>
    </Tooltip>
  )
}

export default CustomTooltip
