import styled from 'styled-components/native'

export const WikiContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: ${({ theme }) => theme.metrics.px(380)}px;
  height: ${({ theme }) => theme.metrics.px(588)}px;
`
