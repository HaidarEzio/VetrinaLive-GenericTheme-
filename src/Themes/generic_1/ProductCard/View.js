import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ProductCard from 'ReusableThemes/ProductCard'

const useStyles = makeStyles(() => ({
  title: {
    marginBottom: 4
  },
  description: {},
  card: {}
}))

const View = (props) => {
  const classes = useStyles()

  return (
    <ProductCard
      showPrefix
      _classes={{
        title: classes.title,
        description: classes.description,
        card: classes.card
      }}
      {...props}
    />
  )
}

export default View
