import styled from 'styled-components/native'

export const CardContainer = styled.TouchableOpacity`
  width: ${({ theme }) => theme.metrics.px(115)}px;
  height: ${({ theme }) => theme.metrics.px(160)}px;
  overflow: hidden;
  margin-right: ${({ theme }) => theme.metrics.px(12)}px;
  margin-bottom: ${({ theme }) => theme.metrics.px(20)}px;
  border-radius: ${({ theme }) => theme.metrics.px(10)}px;
  justify-content: space-between;
  align-items: center;
`

export const CardImage = styled.ImageBackground`
  width: ${({ theme }) => theme.metrics.px(110)}px;
  height: ${({ theme }) => theme.metrics.px(110)}px;
  justify-content: space-between;
`

export const CardTitle = styled.Text`
  margin-top: 1px;
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  color: #333;
  font-family: ${({ theme, fontFamily }) => theme.fonts[fontFamily || 'bold']};
`
