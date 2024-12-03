import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import FundoImage from '../../../assets/Background.jpeg'
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
  RememberMeContainer,
  RememberMeText,
  ForgotPasswordText,
} from './style'

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [rememberMe, setRememberMe] = useState(false) // Estado para "Lembrar de mim"
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

  const handleForgotPassword = () => {
    navigation.navigate('') // Navega para a tela de recuperação de senha
  }

  const toggleRememberMe = () => {
    setRememberMe((prev) => !prev)
  }

  return (
    <ImageBackground source={FundoImage}>
      <Overlay>
        <Container>
          <Title>Login</Title>

          <InputContainer>
            <InputField
              placeholder="Email"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
            <Icon>
              <Ionicons name="person" size={24} color="gray" />
            </Icon>
          </InputContainer>

          <InputContainer>
            <InputField
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <Icon>
              <Ionicons name="lock-closed" size={24} color="gray" />
            </Icon>
          </InputContainer>

          <RememberMeContainer>
            <TouchableOpacity onPress={toggleRememberMe}>
              <Ionicons
                name={rememberMe ? 'checkbox' : 'square-outline'}
                size={20}
                color="white"
              />
            </TouchableOpacity>
            <RememberMeText>Lembrar de mim</RememberMeText>
          </RememberMeContainer>

          <TouchableOpacity onPress={handleForgotPassword}>
            <ForgotPasswordText>Esqueceu minha senha?</ForgotPasswordText>
          </TouchableOpacity>

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

          <GoogleLoginButton />

          {message ? <Message>{message}</Message> : null}
        </Container>
      </Overlay>
    </ImageBackground>
  )
}
