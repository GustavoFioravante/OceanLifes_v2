import React, { useState } from 'react'
import { TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import FundoImage from '../../../assets/Background.jpeg'
import { GoBackButton } from '../../components/GoBack'

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
  GoBackContainerr,
} from './style'

export const Cadastro = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigation = useNavigation()

  const handleSubmit = () => {
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
      setMessage('Preencha todos os campos!')
    } else if (password !== confirmPassword) {
      setMessage('As senhas não coincidem!')
    } else {
      setMessage('Cadastro bem-sucedido!')
      navigation.replace('Login')
    }
  }

  return (
    <ImageBackground style={styles.ImageBackground} source={FundoImage}>
      <Overlay>
        <GoBackContainerr>
          <GoBackButton color='white' />
        </GoBackContainerr>

        <Container>
          <Title>Cadastre-se</Title>

          <InputContainer>
            <InputField
              placeholder='Nome de Usuario'
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
              placeholder='Email'
              value={email}
              onChangeText={setEmail}
              autoCapitalize='none'
            />
            <Icon>
              <Ionicons name='mail' size={24} color='gray' />
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

          <InputContainer>
            <InputField
              placeholder='Confirme sua senha'
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
            <Icon>
              <Ionicons name='lock-closed' size={24} color='gray' />
            </Icon>
          </InputContainer>

          <TouchableOpacity>
            <ButtonContainer>
              <Button onPress={handleSubmit}>
                <ButtonText>Cadastrar</ButtonText>
              </Button>
            </ButtonContainer>
          </TouchableOpacity>

          {message && <Message>{message}</Message>}
        </Container>
      </Overlay>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    height: 1100,
    width: 500,
    right: 85,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
})

export default Cadastro
