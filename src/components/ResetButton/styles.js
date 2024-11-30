import styled from 'styled-components/native'

export const ResetBackContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 300px;
  color: ${({ color, theme }) => color || theme.colors.black};
  margin-top: ${({ mt }) => mt || 100}px;
  margin-left: ${({ ml }) => ml || 0}px;
  left: ${({ theme }) => theme.metrics.px(0)}px;
  padding-left: ${({ theme }) => theme.metrics.px(14)}px;
  padding-right: ${({ theme }) => theme.metrics.px(10)}px;
  padding-top: ${({ theme }) => theme.metrics.px(10)}px;
  padding-bottom: ${({ theme }) => theme.metrics.px(10)}px;
  border-radius: 10px;
  background-color: #1e1782;
`
