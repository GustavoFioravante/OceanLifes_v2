import styled from 'styled-components/native'
import { ScrollView } from 'react-native';

export const Container = styled(ScrollView)`
 flex: 1;
  background-color: #f7f7f7;
  margin-top: ${({ theme }) => theme.metrics.px(0)}px;
`;

export const Header = styled.View`
background-color: #1e1782;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: ${({ theme }) => theme.metrics.px(20)}px;
  padding-right: ${({ theme }) => theme.metrics.px(20)}px;
  padding-bottom: ${({ theme }) => theme.metrics.px(30)}px;
  margin-bottom: ${({ theme }) => theme.metrics.px(20)}px;
  padding-top: ${({ theme }) => theme.metrics.px(20)}px;
`;
export const HeaderText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  right: ${({ theme }) => theme.metrics.px(12)}px;
  top: ${({ theme }) => theme.metrics.px(-4)}px;
  margin-top: ${({ theme }) => theme.metrics.px(30)}px;
`;

export const ButtonsView = styled.View`
  position: relative;
  margin-right: ${({ theme }) => theme.metrics.px(20)}px;
  top: ${({ theme }) => theme.metrics.px(8)}px;
`;

export const ContactItem = styled.View`
  background-color: #fff;
  margin: 10px 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ContactRow = styled.View`
  flex-direction: row; 
  align-items: center; 
`;

export const ContactImage = styled.Image`
  width: 90px;
  height: 100px; 
  border-radius: 25px; 
  margin-right: 30px; 
`;

export const ContactTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const ContactSubtitle = styled.Text`
  font-size: 14px;
  color: #666;
  margin-top: 5px;
`;

export const ContactLink = styled.Text`
  font-size: 14px;
  color: #6a1b9a;
  margin-top: 10px;
`;

export const AdLink = styled.View`
 background-color: blue;
 padding: 50px;
 margin: 10px 20px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const AdLinkText = styled.Text`
  font-size: 14px;
  color: white;
  margin-top: 10px;
  text-align: center;
`;
