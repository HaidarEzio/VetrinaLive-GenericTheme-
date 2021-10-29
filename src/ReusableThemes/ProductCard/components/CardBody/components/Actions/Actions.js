import React, { useMemo } from 'react'
import isEmpty from 'lodash/isEmpty'
import AddToCart from 'Icons/AddToCart'
import CustomButton from 'Components/CustomButton'
import { ButtonBase } from '@material-ui/core'

const Actions = (props) => {
  const {
    productVariationsFeature,
    variants,
    _classes,
    quantity,
    addItemToCart,
    openSingleProdPage,
    t,
    buttonWithText = true
  } = props

  const notProductWithVariants = useMemo(
    () => isEmpty(variants) || !productVariationsFeature,
    [variants, productVariationsFeature]
  )

  const label = notProductWithVariants ? t('add_btn_label') : t('discover')

  const handleClick = (e) => {
    e.stopPropagation()
    notProductWithVariants ? addItemToCart() : openSingleProdPage()
  }

  if (!buttonWithText) {
    return (
      <ButtonBase
        className={_classes?.buttonRoot}
        disabled={!quantity}
        onClick={handleClick}
      >
        <AddToCart className={_classes?.addQuantityBtnIcon} />
      </ButtonBase>
    )
  }

  return (
    <CustomButton
      className={_classes?.buttonRoot}
      height={35}
      startIcon={<AddToCart className={_classes?.addQuantityBtnIcon} />}
      label={label}
      disabled={!quantity}
      onClick={handleClick}
    />
  )
}

export default Actions
