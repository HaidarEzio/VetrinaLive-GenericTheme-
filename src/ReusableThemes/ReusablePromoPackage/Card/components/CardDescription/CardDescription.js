import React from 'react'
import Typography from '@material-ui/core/Typography'

const CardDescription = ({ description, className }) => {
  return (
    <Typography noWrap className={className}>
      {description}
    </Typography>
  )
}

export default CardDescription
