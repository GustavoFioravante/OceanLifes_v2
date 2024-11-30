import styled from 'styled-components/native'

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  height: ${({ theme }) => theme.metrics.px(1100)}px;
  width: ${({ theme }) => theme.metrics.px(560)}px;
  right: ${({ theme }) => theme.metrics.px(195)}px;
  resize-mode: 'cover';
  justify-content: 'center';
`
export const Container = styled.View`
  flex: 1;
  left: ${({ theme }) => theme.metrics.px(35)}px;
  align-items: 'center';
  justify-content: 'center';
`
export const Box = styled.View`
  bottom: ${({ theme }) => theme.metrics.px(400)}px;
  right: ${({ theme }) => theme.metrics.px(20)}px;
`
