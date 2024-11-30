import React from 'react'
import { CustomText } from './Styles'

export const Text = ({ children, ...props }) => {
  return <CustomText {...props}>{children}</CustomText>
}
