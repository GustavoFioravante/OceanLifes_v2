import React from 'react'
import { Text } from '../Text/Text'
import { TagContainer } from './style'

export const Tag = ({ children, ...props }) => (
  <TagContainer {...props}>
    <Text fontFamily={'bold'}>{children}</Text>
  </TagContainer>
)
