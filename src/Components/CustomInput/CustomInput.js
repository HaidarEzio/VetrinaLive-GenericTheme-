import React, { memo, useMemo } from 'react'
import InputBase from '@material-ui/core/InputBase'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import cn from 'clsx'

export const useInputStyles = makeStyles((theme) => ({
  wrapper: ({ withBottomMargin = true }) => ({
    marginBottom: withBottomMargin ? 24 : 0,
    position: 'relative'
  }),
  root: {
    width: '100%',
    borderRadius: 5,
    boxShadow: `0 0 0 1px ${theme.palette.colors.grey[20]}`,
    transition: 'box-shadow ease 0.25s',
    backgroundColor: theme.palette.colors.white,
    padding: 0,
    margin: 0
  },
  input: {
    fontSize: 14,
    padding: 16,
    paddingLeft: 20,
    borderRadius: 5,
    color: theme.palette.colors.black[1],
    '&::placeholder': {
      color: theme.palette.colors.tints.black[300],
      opacity: 1
    }
  },
  focused: {
    boxShadow: `0 0 0 1px ${theme.palette.primary.main}`
  },
  error: {
    boxShadow: `0 0 0 1px ${theme.palette.error.main}`
  },
  label: {
    marginBottom: 15,
    fontSize: 15,
    fontWeight: 500,
    lineHeight: '20px',
    color: theme.palette.colors.tints.black[700]
  },
  required: {
    fontWeight: 'bold',
    color: theme.palette.colors.black[1]
  },
  errorLabel: {
    fontSize: 10,
    position: 'absolute',
    bottom: -2,
    color: theme.palette.error.main,
    transform: 'translateY(100%)'
  },
  disabled: {
    borderRadius: 5,
    backgroundColor: theme.palette.colors.grey10
  },
  startAdornment: {
    display: 'flex',
    marginLeft: theme.spacing(1.5)
  },
  helperText: {
    marginTop: theme.spacing(0.5),
    fontSize: 12,
    fontWeight: 300,
    lineHeight: '17px'
  }
}))

const CustomInput = (props) => {
  const classes = useInputStyles(props)
  const {
    className,
    classes: customClasses,
    placeholder,
    onChange,
    inputProps,
    type,
    value,
    startAdornment,
    label,
    rows = 6,
    error = {},
    touched = {},
    name = '',
    endAdornment,
    fullWidth,
    withBottomMargin,
    required = false,
    autoFocus = false,
    inputBaseRootClass,
    customInputStyle,
    helperText,
    t,
    Input = null,
    optional,
    ...others
  } = props
  const { startAdornment: styleStartAdornment, ...restCustomClasses } =
    customClasses || {}

  const labelHint = useMemo(() => {
    if (required) return <span>*</span>
    else if (optional) return <span>({t('optional')})</span>
  }, [optional, required, t])

  return (
    <div className={cn(classes.wrapper, className)}>
      {label && (
        <Typography className={classes.label}>
          {label} {labelHint}
        </Typography>
      )}
      {Input || (
        <InputBase
          type={type}
          placeholder={placeholder}
          name={name}
          classes={{
            root: cn(classes.root, inputBaseRootClass, {
              [classes.error]: error[name] && touched[name]
            }),
            input: cn(classes.input, customInputStyle, 'data-hj-allow'),
            focused: classes.focused,
            disabled: classes.disabled,
            ...restCustomClasses
          }}
          inputProps={inputProps}
          onChange={onChange}
          value={value}
          startAdornment={
            startAdornment && (
              <div className={classes.startAdornment}>{startAdornment}</div>
            )
          }
          rows={rows}
          endAdornment={endAdornment}
          fullWidth={fullWidth}
          ref={(component) => {
            if (autoFocus && component) {
              setTimeout(
                () => component.getElementsByTagName('input')[0].focus(),
                500
              )
            }
          }}
          {...others}
        />
      )}

      {helperText && (
        <Typography className={classes.helperText}>{helperText}</Typography>
      )}

      {/*DO NOT REMOVE CLASS*/}
      {error[name] && touched[name] && (
        <Typography className={`field-error-message ${classes.errorLabel}`}>
          * {error[name]}
        </Typography>
      )}
    </div>
  )
}

export default memo(CustomInput)
