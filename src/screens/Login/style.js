import styled from 'styled-components/native'

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  height: ${({ theme }) => theme.metrics.px(1100)}px;
  width: ${({ theme }) => theme.metrics.px(600)}px;
  right: ${({ theme }) => theme.metrics.px(195)}px;
  resize-mode: 'cover';
  justify-content: 'center';
`

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.metrics.px(20)}px;
`
export const ViewContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Overlay = styled.View`
  flex: 1;
  width: ${({ theme }) => theme.metrics.px(350)}px;
  height: ${({ theme }) => theme.metrics.px(440)}px;
  border-radius: ${({ theme }) => theme.metrics.px(20)}px;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  position: absolute;
  top: ${({ theme }) => theme.metrics.px(250)}px;
  left: ${({ theme }) => theme.metrics.px(210)}px;
`

export const Title = styled.Text`
  font-family: 'AtkinsonHyperlegible_700Bold';
  font-size: ${({ theme }) => theme.metrics.px(30)}px;
  margin-bottom: ${({ theme }) => theme.metrics.px(25)}px;
  margin-right: ${({ theme }) => theme.metrics.px(220)}px;
  color: white;
`

export const InputContainer = styled.View`
  position: relative;
  width: ${({ theme }) => theme.metrics.px(280)}px;
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
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  color: #000;
`

export const Icon = styled.View`
  padding-left: ${({ theme }) => theme.metrics.px(8)}px;
`

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${({ theme }) => theme.metrics.px(295)}px;
  height: ${({ theme }) => theme.metrics.px(50)}px;
  padding-left: ${({ theme }) => theme.metrics.px(10)}px;
  padding-right: ${({ theme }) => theme.metrics.px(10)}px;
  margin-top: ${({ theme }) => theme.metrics.px(10)}px;
  margin-right: ${({ theme }) => theme.metrics.px(5)}px;
  margin-bottom: ${({ theme }) => theme.metrics.px(10)}px;
`

export const Button = styled.TouchableOpacity`
  flex: 1;
  padding: ${({ theme }) => theme.metrics.px(12)}px;
  background-color: #2800a9;
  align-items: center;
  border-radius: ${({ theme }) => theme.metrics.px(5)}px;
  margin-left: ${({ theme }) => theme.metrics.px(10)}px;
  margin-right: ${({ theme }) => theme.metrics.px(5)}px;
`

export const ButtonText = styled.Text`
  color: #fff;
  font-size: ${({ theme }) => theme.metrics.px(18)}px;
`

export const Message = styled.Text`
  margin-top: ${({ theme }) => theme.metrics.px(20)}px;
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  color: white;
`
export const RememberMeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${({ theme }) => theme.metrics.px(10)}px;
`

export const RememberMeText = styled.Text`
  color: white;
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  margin-left: ${({ theme }) => theme.metrics.px(5)}px;
`

export const ForgotPasswordText = styled.Text`
  color: white;
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  text-align: right;
  margin-top: ${({ theme }) => theme.metrics.px(5)}px;
  margin-bottom: ${({ theme }) => theme.metrics.px(10)}px;
`
