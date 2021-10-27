import cn from 'clsx'
import React, { useCallback } from 'react'
import { Popover, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CustomLink from '../CustomLink'

const useStyles = makeStyles((theme) => ({
  listElem: {
    padding: '16px 20px 15px',
    fontSize: 14,
    lineHeight: '18px',
    borderRadius: 0,
    fontWeight: 400,
    textAlign: 'center',
    borderBottom: '1px solid rgba(10, 37, 64, 0.08)',
    '& img': {
      marginRight: 12
    }
  },
  label: {
    display: 'block'
  },
  button: {
    textTransform: 'none',
    justifyContent: 'flex-start'
  },
  paper: ({
    minWidth = theme.dropdown.minWidth,
    maxHeight = theme.dropdown.maxHeight
  }) => ({
    borderRadius: 5,
    minWidth,
    maxHeight,
    boxShadow: theme.palette.shadows.button,
    '& a:hover': {
      backgroundColor: theme.palette.colors.grey['04']
    }
  }),
  isSelected: {
    color: theme.palette.primary.main
  }
}))

const CustomDropdown = ({
  anchorEl,
  handleClose,
  items,
  minWidth,
  maxHeight,
  onChange = null,
  anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'center'
  },
  transformOrigin = { vertical: 'top', horizontal: 'center' }
}) => {
  const classes = useStyles({ minWidth, maxHeight })
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const handleOnClick = useCallback(
    (item) => {
      const { action = null } = item
      handleClose()
      if (onChange) return onChange(item)
      return action()
    },
    [handleClose, onChange]
  )

  if (!items || items.length === 0) {
    return null
  }

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      classes={{
        paper: classes.paper
      }}
    >
      {items.map((item, index) => {
        const {
          title,
          href = null,
          action = null,
          isSelected = false,
          icon = () => null
        } = item
        return (
          <div key={index}>
            {href ? (
              <CustomLink href={href}>
                <Typography className={classes.listElem}>
                  {icon()}
                  {title}
                </Typography>
              </CustomLink>
            ) : (
              <Button
                fullWidth
                onClick={() => handleOnClick(item)}
                className={cn(classes.listElem, classes.button, {
                  [classes.isSelected]: isSelected
                })}
                classes={{
                  label: classes.label
                }}
              >
                {icon()}
                {title}
              </Button>
            )}
          </div>
        )
      })}
    </Popover>
  )
}

export default CustomDropdown
