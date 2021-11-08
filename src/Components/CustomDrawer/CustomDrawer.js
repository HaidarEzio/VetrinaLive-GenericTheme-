import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { SwipeableDrawer } from '@material-ui/core'
import Header from './components/Header'
import cn from 'clsx'

const useStyles = makeStyles((theme) => ({
  root: ({ width = theme.drawer.width }) => ({
    height: '100vh',
    display: 'flex',
    padding: '40px 25px 30px',
    flexDirection: 'column',
    overflowY: 'auto',
    width,
    [theme.breakpoints.down('xs')]: {
      width: '100vw'
    }
  }),
  body: {
    flexGrow: 1
  }
}))

function CustomDrawer(props) {
  const {
    headerRightElements,
    anchor = 'right',
    open,
    onClose,
    onOpen = () => null,
    children,
    title,
    withCloseBtn = true,
    backArrowText = 'Torna indietro',
    customClasses = {},
    bodyStyle = {},
    customClassRoot
  } = props
  const classes = useStyles(props)
  return (
    <SwipeableDrawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      classes={customClasses}
    >
      <div className={cn(classes.root, customClassRoot)}>
        {title && (
          <Header
            rightElements={headerRightElements}
            onClose={onClose}
            title={title}
            backArrowText={backArrowText}
            withCloseBtn={withCloseBtn}
          />
        )}
        <div className={cn(classes.body, bodyStyle)}>{children}</div>
      </div>
    </SwipeableDrawer>
  )
}

export default memo(CustomDrawer)
