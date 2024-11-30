import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ theme }) => theme.metrics.px(460)}px;
`

export const HeaderImageBackground = styled.ImageBackground`
  width: ${({ theme }) => theme.metrics.px(385)}px;
  height: ${({ theme }) => theme.metrics.px(470)}px;
`
export const HeaderGradient = styled(LinearGradient)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-horizontal: ${({ theme }) => theme.metrics.px(44)}px;
  padding-top: ${({ theme }) => theme.metrics.px(56)}px;
`

export const ButtonsView = styled.View`
  display: flex;
  margin-top: 5px;
  width: 100%;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`
