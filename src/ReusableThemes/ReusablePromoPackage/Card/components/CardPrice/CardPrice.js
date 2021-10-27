import React from 'react'
import Typography from '@material-ui/core/Typography'

const CardPrice = ({ price, className }) => {
  return (
    <Typography noWrap className={className}>
      {price}
    </Typography>
  )
}

export default CardPrice
