import React from 'react'
import PropTypes from 'prop-types'
import { ButtonContainer } from './styles'
import { Text } from '../Text/Text'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../standart/theme'

export const IconButton = ({ iconName, label, onPress }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <Ionicons name={iconName} size={theme.metrics.px(28)} color={theme.colors.white} />
      {label ? (
        <Text fontFamily={'semiBold'} size={10} mt={6}>
          {label}
        </Text>
      ) : null}
    </ButtonContainer>
  )
}

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func, // Torna `onPress` opcional
}
