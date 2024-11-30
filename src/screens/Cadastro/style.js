import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.metrics.px(20)}px;
`

export const GoBackContainerr = styled.View`
  position: absolute;
  top: ${({ theme }) => theme.metrics.px(-52)}px;
  padding-left: ${({ theme }) => theme.metrics.px(14)}px;
  left: ${({ theme }) => theme.metrics.px(0)}px;
`

export const Overlay = styled.View`
  flex: 1;
  width: ${({ theme }) => theme.metrics.px(330)}px;
  height: ${({ theme }) => theme.metrics.px(495)}px;
  border-radius: ${({ theme }) => theme.metrics.px(20)}px;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  position: absolute;
  top: ${({ theme }) => theme.metrics.px(200)}px;
  left: ${({ theme }) => theme.metrics.px(100)}px;
`

export const Title = styled.Text`
  font-family: 'AtkinsonHyperlegible_700Bold';
  font-size: ${({ theme }) => theme.metrics.px(28)}px;
  top: ${({ theme }) => theme.metrics.px(15)}px;
  margin-right: ${({ theme }) => theme.metrics.px(90)}px;
  color: white;
  position: absolute;
`

export const InputContainer = styled.View`
  position: relative;
  width: ${({ theme }) => theme.metrics.px(270)}px;
  margin-bottom: ${({ theme }) => theme.metrics.px(12)}px;
  background-color: #fff;
  border-radius: ${({ theme }) => theme.metrics.px(5)}px;
  border: 1px solid #ccc;
  padding: ${({ theme }) => theme.metrics.px(10)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const InputField = styled.TextInput`
  flex: 1;
  font-size: ${({ theme }) => theme.metrics.px(15)}px;
  color: #000;
`

export const Icon = styled.View`
  padding-left: ${({ theme }) => theme.metrics.px(8)}px;
`

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  width: ${({ theme }) => theme.metrics.px(290)}px;
  padding-left: ${({ theme }) => theme.metrics.px(20)}px;
  padding-right: ${({ theme }) => theme.metrics.px(20)}px;
  margin-top: ${({ theme }) => theme.metrics.px(8)}px;
`

export const Button = styled.TouchableOpacity`
  flex: 1;
  padding: ${({ theme }) => theme.metrics.px(12)}px;
  background-color: #2800a9;
  align-items: center;
  border-radius: ${({ theme }) => theme.metrics.px(5)}px;
  margin: ${({ theme }) => theme.metrics.px(0, 5)}px;
`

export const ButtonText = styled.Text`
  color: #fff;
  font-size: ${({ theme }) => theme.metrics.px(18)}px;
`

export const Message = styled.Text`
  margin-top: ${({ theme }) => theme.metrics.px(20)}px;
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  color: white;
  text-align: center;
  position: space-betwen;
`
