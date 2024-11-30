import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, SplashScreenWindow, Detail, Login, Cadastro, UserProfile, ContactPage, PartnersPage } from '../screens/index'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

// Stack Navigator para as telas de autenticação (Splash, Login, Cadastro)
function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Splash' component={SplashScreenWindow} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Cadastro' component={Cadastro} />
    </Stack.Navigator>
  )
}

// Stack Navigator para as telas principais com acesso ao Drawer
function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Detail' component={Detail} />
      <Stack.Screen name='Perfil' component={UserProfile} />
    </Stack.Navigator>
  )
}

// Drawer Navigator para o menu de navegação
function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name='Menu' component={AppStack} />
      <Drawer.Screen name='Parcerias e Instituições de Ensino' component={PartnersPage}/>
      <Drawer.Screen name='Perfil' component={UserProfile} />
      <Drawer.Screen name='Contatos' component={ContactPage}/>
      <Drawer.Screen name='Sair' component={Login}/>
    </Drawer.Navigator>
  )
}

// Navegação principal, alternando entre AuthStack e DrawerNavigator
export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='AuthStack' component={AuthStack} />
        <Stack.Screen name='DrawerNavigator' component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
