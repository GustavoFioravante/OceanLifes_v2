import React from 'react'
import { GoBackContainer } from './style'
import { useNavigation } from '@react-navigation/native'
import { theme } from '../../standart/theme'
import { Ionicons } from '@expo/vector-icons'

export const GoBackButton = ({ color = theme.colors.violet }) => {
  const navigation = useNavigation()
  return (
    <GoBackContainer onPress={() => navigation.goBack()}>
      <Ionicons name='chevron-back' color={color} size={theme.metrics.px(28)} />
    </GoBackContainer>
  )
}
