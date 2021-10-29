import React from 'react'
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone'
import ButtonBase from '@material-ui/core/ButtonBase'

const CloseButton = ({ className, onClose }) => {
  return (
    <ButtonBase onClick={onClose}>
      <HighlightOffTwoToneIcon className={className} />
    </ButtonBase>
  )
}

export default CloseButton
