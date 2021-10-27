import React from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import cn from 'clsx'

const useStyle = makeStyles(() => ({
  link: {
    textDecoration: 'none',
    display: 'flex',
    color: 'black'
  }
}))

const CustomLink = ({
  children,
  target = null,
  rel = null,
  style = null,
  className,
  ...rest
}) => {
  const classes = useStyle()
  return (
    <Link {...rest} scroll={false}>
      <a
        target={target}
        rel={rel}
        className={cn(classes.link, className)}
        style={style}
      >
        {children}
      </a>
    </Link>
  )
}

export default CustomLink
