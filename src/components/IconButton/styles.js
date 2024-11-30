import styled from 'styled-components/native'

export const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: -30px;
  margin-left: -30px;
  margin-top: ${({ theme }) => theme.metrics.px(8)}px;
`
