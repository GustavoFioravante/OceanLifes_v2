import React from 'react'
import ImagemFundo from '../../../assets/Background.jpeg'
import { Text } from '../../components/Text/Text'
import { NextButton } from '../../components/NextButton'
import { ImageBackground, Container, Box } from './styles'

export const SplashScreenWindow = () => {
  return (
    <Container>
      <ImageBackground source={ImagemFundo} />
      <NextButton destination='Login' />
      <Box>
        <Text size={50} lh={60}>
          EXPLORE
        </Text>
        <Text size={50} lh={60}>
          A BELEZA DA NATUREZA
        </Text>
      </Box>
    </Container>
  )
}

export default SplashScreenWindow;
