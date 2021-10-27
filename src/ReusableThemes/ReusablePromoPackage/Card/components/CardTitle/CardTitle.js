import React from 'react'
import Typography from '@material-ui/core/Typography'

const CardTitle = ({ title, className }) => {
  return (
    <Typography noWrap className={className}>
      {title}
    </Typography>
  )
}

export default CardTitle
