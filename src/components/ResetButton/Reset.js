import React from 'react'
import { ResetBackContainer } from './styles'
import { useNavigation } from '@react-navigation/native'
import { theme } from '../../standart/theme'
import { Ionicons } from '@expo/vector-icons'
import { Text } from '../Text/Text'

export const ResetButton = () => {
  const navigation = useNavigation()

  const handleReset = () => {
    navigation.replace('AuthStack', { screen: 'Login' })
  }

  return (
    <ResetBackContainer onPress={handleReset}>
      <Ionicons name='exit-outline' color={theme.colors.white} size={theme.metrics.px(28)} />
      <Text fontFamily={'semiBold'} size={20} mt={0} ml={35} color='#FFFFFF'>
        Sair
      </Text>
    </ResetBackContainer>
  )
}
