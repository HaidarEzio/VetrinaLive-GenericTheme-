import React, { memo, useMemo } from 'react'
import { useTheme } from '@material-ui/styles'
import  isEmpty  from 'lodash/fp/isEmpty'
import * as themes from 'Themes/exportTheme'
import CustomLink from 'Components/CustomLink'
import CustomTooltip from '../CustomTooltip'

const CustomButton = (props) => {
  const {
    type = 'button',
    tooltip,
    // in case if button should be link
    href = null,
    as = null,
    target = null,

    ...others
  } = props
  const { name } = useTheme()
  const { CustomButton: View } = themes[name] || {}

  const rootEl = useMemo(() => <View {...others} />, [others])

  const externalLinkBtn = useMemo(() => {
    return (
      <a href={href} target={target} rel="noopener noreferrer">
        {rootEl}
      </a>
    )
  }, [href, rootEl, target])

  const linkBtn = useMemo(() => {
    return (
      <CustomLink href={href} as={as}>
        {rootEl}
      </CustomLink>
    )
  }, [href, rootEl, as])

  if (!isEmpty(tooltip)) {
    return <CustomTooltip title={tooltip}>{rootEl}</CustomTooltip>
  }

  if (type === 'a') {
    return externalLinkBtn
  }

  if (type === 'link') {
    return linkBtn
  }

  return rootEl
}

export default memo(CustomButton)
