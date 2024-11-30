import React from 'react'
import PropTypes from 'prop-types'
import { NextButtonContainer } from './style'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { theme } from '../../standart/theme'

export const NextButton = ({ destination }) => {
  const navigation = useNavigation()
  return (
    <NextButtonContainer onPress={() => navigation.navigate(destination)}>
      <Ionicons name='chevron-forward' color={theme.colors.white} size={theme.metrics.px(48)} />
    </NextButtonContainer>
  )
}

NextButton.propTypes = {
  destination: PropTypes.string.isRequired,
}
