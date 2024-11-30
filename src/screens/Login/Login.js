import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import FundoImage from '../../../assets/Background.jpeg'
import { theme } from '../../standart/theme'
import { GoogleLoginButton } from '../../components/GoogleButton'

import {
  Container,
  Title,
  InputContainer,
  InputField,
  Icon,
  Button,
  ButtonText,
  Message,
  Overlay,
  ButtonContainer,
  ImageBackground,
} from './style'

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigation = useNavigation()

  const handleSubmit = () => {
    if (username === 'admin' && password === 'admin') {
      setMessage('Login bem-sucedido')
      navigation.replace('DrawerNavigator')
    } else {
      setMessage('Usuário ou senha inválidos!')
    }
  }

  const goToCadastro = () => {
    navigation.navigate('Cadastro') 
  }

  return (
    <ImageBackground source={FundoImage}>
      <Overlay
        style={{
          transform: [
            { translateX: theme.metrics.px(-62) },
            { translateY: theme.metrics.px(-140) },
          ],
        }}
      >
        <Container>
          <Title>Login</Title>

          <InputContainer>
            <InputField
              placeholder='Email'
              value={username}
              onChangeText={setUsername}
              autoCapitalize='none'
            />
            <Icon>
              <Ionicons name='person' size={24} color='gray' />
            </Icon>
          </InputContainer>

          <InputContainer>
            <InputField
              placeholder='Senha'
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <Icon>
              <Ionicons name='lock-closed' size={24} color='gray' />
            </Icon>
          </InputContainer>

          <TouchableOpacity onPress={handleSubmit}>
            <ButtonContainer>
              <Button onPress={handleSubmit}>
                <ButtonText>Entrar</ButtonText>
              </Button>
              <Button onPress={goToCadastro}>
                <ButtonText>Cadastre-se</ButtonText>
              </Button>
            </ButtonContainer>
          </TouchableOpacity>

          <GoogleLoginButton/>

          {message ? <Message>{message}</Message> : null}
        </Container>
      </Overlay>
    </ImageBackground>
  )
}

export default Login
