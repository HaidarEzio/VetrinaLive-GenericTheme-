import { CircularProgress, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import cn from 'clsx'
import React, { memo } from 'react'

const useStyles = makeStyles(() => ({
  label: (props) => ({
    color: props.color ? props.color : 'white',
    textTransform: 'none',
    fontSize: props.fontSize ? props.fontSize : 16,
    fontWeight: props.fontWeight ? props.fontWeight : 500
  }),
  hidden: {
    visibility: 'hidden'
  },
  loadingWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

const LabelButton = (props) => {
  const { loading, label, labelClassName, fontSize, color, fontWeight } = props
  const classes = useStyles({
    fontSize,
    fontWeight,
    color
  })
  return (
    <React.Fragment>
      {label && (
        <Typography
          noWrap
          className={cn(classes.label, labelClassName, {
            [classes.hidden]: loading
          })}
        >
          {label}
        </Typography>
      )}
      {loading && (
        <div className={classes.loadingWrapper}>
          <CircularProgress className={cn(classes.label)} size={18} />
        </div>
      )}
    </React.Fragment>
  )
}

export default memo(LabelButton)
