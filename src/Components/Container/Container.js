import { makeStyles } from '@material-ui/core/styles'
import React, { memo } from 'react'
import cn from 'clsx'

const useStyle = makeStyles((theme) => ({
  container: theme.container
}))

const Container = ({ children, className }) => {
  const classes = useStyle()
  return <div className={cn(classes.container, className)}>{children}</div>
}

export default memo(Container)
