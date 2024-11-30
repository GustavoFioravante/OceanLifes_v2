import React from 'react';
import { Header, HeaderText, Container, ButtonsView, ContactItem, ContactLink, ContactSubtitle, ContactTitle, AdLink, AdLinkText  } from './styles';
import { useNavigation } from '@react-navigation/native' 
import { IconButton } from '../../components/IconButton';


export const ContactPage = ({onDetail}) => {
    const navigation = useNavigation() 
    const openMenu = () => {
        navigation.openDrawer() 
      }

    return (
      <Container>
        <Header>
        <ButtonsView>
            {!onDetail && <IconButton label='' iconName='list' onPress={openMenu} />}
          </ButtonsView>
          <HeaderText>Para falar conosco, temos algumas opções!</HeaderText>
        </Header>
        
        <ContactItem>
          <ContactTitle>E-mail</ContactTitle>
          <ContactSubtitle>Tem alguma dúvida?</ContactSubtitle>
          <ContactLink>suportTeam@oceanlifes.com.br</ContactLink>
        </ContactItem>
  
        <ContactItem>
          <ContactTitle>Telefone</ContactTitle>
          <ContactSubtitle>Você pode ligar a qualquer hora.</ContactSubtitle>
          <ContactLink>0800 999 9999</ContactLink>
        </ContactItem>
  
        <ContactItem>
          <ContactTitle>Chat</ContactTitle>
          <ContactSubtitle>Precisa de uma ajuda agora?</ContactSubtitle>
          <ContactLink>Basta abrir o chat no app.</ContactLink>
        </ContactItem>
        <AdLink>
            <AdLinkText>Anúncio</AdLinkText>
        </AdLink>

      </Container>
    );
  };
  