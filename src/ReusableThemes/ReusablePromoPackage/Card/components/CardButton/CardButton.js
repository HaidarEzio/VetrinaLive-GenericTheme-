import CustomLink from '../../../../../components/CustomLink'
import CustomButton from '../../../../../components/CustomButton/CustomButton'
import React from 'react'

const CardButton = ({
  shopKey,
  promoPackageId,
  className,
  t,
  backgroundColor,
  label,
  ...restProps
}) => {
  return (
    <CustomLink
      href="/[shopKey]/packages/[packageId]"
      as={`/${shopKey}/packages/${promoPackageId}`}
    >
      <CustomButton
        backgroundColor={backgroundColor}
        className={className}
        label={label ?? t('shop_now')}
        {...restProps}
      />
    </CustomLink>
  )
}

export default CardButton
