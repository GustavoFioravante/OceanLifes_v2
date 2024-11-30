import styled from 'styled-components/native'

export const ContainerText = styled.View`
  width: ${({ theme }) => theme.metrics.px(375)}px;
  padding: ${({ theme }) => theme.metrics.px(20)}px;
  margin-top: ${({ theme }) => theme.metrics.px(60)}px;
  margin-bottom: ${({ theme }) => theme.metrics.px(10)}px;
  background-color: #1e1782;
  border-radius: ${({ theme }) => theme.metrics.px(10)}px;
`
export const TitleText = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(36)}px;
  font-family: 'AtkinsonHyperlegible_700Bold';
  color: #ffffff;
  line-height: ${({ theme }) => theme.metrics.px(35)}px;
  letter-spacing: ${({ theme }) => theme.metrics.px(0.5)}px;
  text-align: justify;
  height: ${({ theme }) => theme.metrics.px(40)}px;
  margin-bottom: ${({ theme }) => theme.metrics.px(15)}px;
  margin-top: ${({ theme }) => theme.metrics.px(15)}px;
`
export const Text = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(18)}px;
  font-family: 'AtkinsonHyperlegible_700Bold';
  color: #ffffff;
  line-height: ${({ theme }) => theme.metrics.px(28)}px;
  letter-spacing: ${({ theme }) => theme.metrics.px(0.5)}px;
  text-align: justify;
  margin-bottom: ${({ theme }) => theme.metrics.px(15)}px;
`

export const AdLink = styled.View`
 background-color: blue;
 padding: 50px;
 margin-left: 10px;
 margin-right: 10px;
 top: 20px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const AdLinkText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: white;
  margin-top: 10px;
  text-align: center;
`;
