import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const CardDiscount = ({ discount, className, labelClassName }) => {
  return (
    <Grid item className={className}>
      <Typography className={labelClassName}>{discount}</Typography>
    </Grid>
  )
}

export default CardDiscount
