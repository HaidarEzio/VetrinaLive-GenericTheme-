import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import LabelButton from './LabelButton'

const useStyles = makeStyles((theme) => ({
  button: ({
    boxShadow,
    backgroundColor,
    height,
    borderRadius,
    color,
    maxWidth
  }) => ({
    position: 'relative',
    boxShadow: boxShadow || theme.palette.shadows.button,
    backgroundColor,
    width: '100%',
    borderRadius,
    height,
    maxWidth,
    minHeight: height,
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center',
    color: color,
    '&:hover': {
      backgroundColor,
      filter: 'brightness(90%)',
      boxShadow
    }
  }),
  startIcon: {
    marginBottom: -3
  }
}))

const View = (props) => {
  const {
    onClick,
    loading,
    label,
    leftAdornment,
    disabled = false,
    endIcon,

    // custom classes
    className,
    labelClassName,
    customClassStartIcon,
    customClassEndIcon,

    // styles
    backgroundColor,
    color,
    maxWidth,
    height,
    borderRadius,
    boxShadow,
    fontSize,
    fontWeight,
    ...others
  } = props

  const classes = useStyles({
    backgroundColor,
    color,
    maxWidth,
    boxShadow,
    height,
    borderRadius
  })

  return (
    <Button
      disableElevation
      startIcon={!loading && leftAdornment}
      onClick={loading ? () => undefined : onClick}
      variant="contained"
      className={clsx(classes.button, className)}
      disabled={disabled}
      {...others}
      endIcon={endIcon}
      classes={{
        startIcon: clsx(classes.startIcon, customClassStartIcon),
        endIcon: clsx(customClassEndIcon)
      }}
    >
      <LabelButton
        loading={loading}
        label={label}
        labelClassName={labelClassName}
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
      />
    </Button>
  )
}

export default View
