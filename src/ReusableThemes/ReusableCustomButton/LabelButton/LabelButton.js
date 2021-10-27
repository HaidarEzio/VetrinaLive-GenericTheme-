import React from 'react'
import clsx from 'clsx'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  label: (props) => ({
    color: props.color ? props.color : theme.palette.colors.white,
    textTransform: 'none',
    fontSize: props.fontSize ? props.fontSize : 14,
    fontWeight: props.fontWeight ? props.fontWeight : 700
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
    <>
      {label && (
        <Typography
          noWrap
          className={clsx(classes.label, labelClassName, {
            [classes.hidden]: loading
          })}
        >
          {label}
        </Typography>
      )}
      {loading && (
        <div className={classes.loadingWrapper}>
          <CircularProgress className={clsx(classes.label)} size={18} />
        </div>
      )}
    </>
  )
}

export default LabelButton
