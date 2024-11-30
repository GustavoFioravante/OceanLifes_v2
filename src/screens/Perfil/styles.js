import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f7f7f7;
  padding: ${({ theme }) => theme.metrics.px(40)}px;
  margin-top: ${({ theme }) => theme.metrics.px(80)}px;
`

export const Header = styled.View`
  align-items: center;
  margin-bottom: ${({ theme }) => theme.metrics.px(30)}px;
`

export const ProfileImage = styled.Image`
  width: ${({ theme }) => theme.metrics.px(120)}px;
  height: ${({ theme }) => theme.metrics.px(120)}px;
  border-radius: ${({ theme }) => theme.metrics.px(60)}px;
  margin-bottom: ${({ theme }) => theme.metrics.px(15)}px;
`

export const UserName = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(24)}px;
  font-weight: bold;
  color: #333;
`

export const UserEmail = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(18)}px;
  color: #777;
  margin-top: ${({ theme }) => theme.metrics.px(5)}px;
`

export const InfoSection = styled.View`
  margin-top: ${({ theme }) => theme.metrics.px(20)}px;
`

export const InfoTitle = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(20)}px;
  font-weight: bold;
  color: #333;
  margin-bottom: ${({ theme }) => theme.metrics.px(10)}px;
`

export const InfoText = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  color: #555;
`

export const ButtonsView = styled.View`
  position: flex;
  top: ${({ theme }) => theme.metrics.px(35)}px;
  margin-left: ${({ theme }) => theme.metrics.px(15)}px;
  right: ${({ theme }) => theme.metrics.px(175)}px;
  z-index: 1;
`
