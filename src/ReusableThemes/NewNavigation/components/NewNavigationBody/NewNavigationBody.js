import React, { useCallback } from 'react'
import clsx from 'clsx'
import Container from 'Components/Container'
import Grid from '@material-ui/core/Grid'
import Router from 'next/router'
import Button from '@material-ui/core/Button'
import { Typography, useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import { makeStyles } from '@material-ui/core/styles'
import NewNavigationDrawer from '../NewNavigationDrawer/NewNavigationDrawer'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.colors.white
  },
  navigation: {
    minHeight: 50,
    [theme.breakpoints.down('sm')]: {
      minHeight: 'auto',
      paddingTop: 100
    }
  },
  button: {
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 15,
      marginLeft: -12
    }
  },
  label: {
    fontSize: 14,
    lineHeight: '20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
      lineHeight: '28px'
    }
  },
  active: {
    fontWeight: 700
  }
}))

const NewNavigationBody = ({
  t,
  customClasses,
  links,
  goTo,
  toggle,
  isOpened
}) => {
  const classes = useStyles()
  const theme = useTheme()
  const breakpointsDownSm = useMediaQuery(theme.breakpoints.down('sm'))
  const renderItems = useCallback(
    () =>
      links.map(({ path, label, onClick, to }, index) => {
        const isActive = Router.pathname === path
        return (
          <Button
            key={index}
            className={clsx(classes.button, customClasses?.button)}
            onClick={() => {
              if (to) goTo(to)
              if (onClick) onClick()
              if (breakpointsDownSm) toggle()
            }}
          >
            <Typography
              noWrap
              className={clsx(classes.label, customClasses?.label, {
                [classes.active]: isActive,
                [customClasses?.active]: isActive && customClasses?.active
              })}
            >
              {label}
            </Typography>
          </Button>
        )
      }),
    [
      breakpointsDownSm,
      classes.active,
      classes.button,
      classes.label,
      customClasses,
      goTo,
      links,
      toggle
    ]
  )

  if (breakpointsDownSm) {
    return (
      <NewNavigationDrawer
        t={t}
        isOpened={isOpened}
        toggle={toggle}
        customClasses={{
          root: clsx(classes.root, customClasses?.root),
          navigation: clsx(classes.navigation, customClasses?.navigation)
        }}
        items={renderItems()}
      />
    )
  }
  return (
    <div className={clsx(classes.root, customClasses?.root)}>
      <Container>
        <Grid
          container
          justify="center"
          alignItems="center"
          wrap="nowrap"
          className={clsx(classes.navigation, customClasses?.navigation)}
        >
          {renderItems()}
        </Grid>
      </Container>
    </div>
  )
}

export default NewNavigationBody
