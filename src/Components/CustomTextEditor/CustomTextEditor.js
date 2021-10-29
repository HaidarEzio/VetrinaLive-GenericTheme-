import React, { useMemo } from 'react'
import MUIRichTextEditor from 'mui-rte'
import { convertToRaw } from 'draft-js'

function CustomTextEditor(props) {
  const { onChange = () => null, defaultValue = '', ...others } = props

  const handleChange = (state) => {
    const length = state.getCurrentContent().getPlainText('').length
    const content = JSON.stringify(convertToRaw(state.getCurrentContent()))
    onChange(content, state, length)
  }

  const _defaultValue = useMemo(() => {
    return defaultValue.includes('blocks') ? defaultValue : ''
  }, [defaultValue])

  return (
    <MUIRichTextEditor
      onChange={handleChange}
      defaultValue={_defaultValue}
      {...others}
    />
  )
}

export default CustomTextEditor
