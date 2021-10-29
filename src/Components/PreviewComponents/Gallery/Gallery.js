import React, { useMemo } from 'react'
import { useShopInfoContext } from '../../../context/ShopInfoStore/context'
import useGallery from '../../GalleryItemList/useGallery'
import { useTheme } from '@material-ui/styles'
import * as themes from '../../../../themes'

const Gallery = ({ t, limit = 3 }) => {
  const { selected, open, toggleDialog, imgArray } = useGallery()

  const { shop } = useShopInfoContext()

  const { gallery, key } = shop || {}

  const filteredItems = imgArray?.slice(0, limit)
  const showButton = gallery?.length > limit

  const props = useMemo(
    () => ({
      filteredItems,
      toggleDialog,
      open,
      selected,
      showButton,
      t,
      shopKey: key
    }),
    [filteredItems, toggleDialog, open, selected, showButton, t, key]
  )

  const { name } = useTheme()
  const { PreviewGallery: View } = themes[name] || {}

  return <View {...props} />
}

export default Gallery
