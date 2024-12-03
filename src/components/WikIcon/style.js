import styled from 'styled-components/native'

export const WikiContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  right:${({ theme }) => theme.metrics.px(8)}px;
  width: ${({ theme }) => theme.metrics.px(380)}px;
  height: ${({ theme }) => theme.metrics.px(590)}px;
`
