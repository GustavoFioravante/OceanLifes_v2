import styled from 'styled-components/native'

export const NextButtonContainer = styled.TouchableOpacity`
  position: absolute;
  bottom: ${({ theme }) => theme.metrics.px(230)}px;
  right: ${({ theme }) => theme.metrics.px(40)}px;
`
