import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import * as themes from '../../../../themes'
import { useShopInfoContext } from '../../../context/ShopInfoStore/context'

const Banner = (props) => {
  const { name } = useTheme()
  const { shop } = useShopInfoContext()
  const { max_discount } = shop || {}
  const { PreviewComponentBanner: View } = themes[name] || {}

  return <View maxDiscount={max_discount} {...props} />
}

export default Banner
