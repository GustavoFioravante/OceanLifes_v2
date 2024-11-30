import React from 'react';
import { Header, HeaderText, Container, ButtonsView, ContactItem,ContactImage, ContactRow, ContactLink, ContactSubtitle, ContactTitle, AdLink, AdLinkText  } from './styles';
import { useNavigation } from '@react-navigation/native' 
import { IconButton } from '../../components/IconButton';
import { View } from 'react-native';


export const PartnersPage = ({onDetail}) => {
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
          <HeaderText>Parcerias e Instituições de Ensino</HeaderText>
        </Header>
  
        <ContactItem>
          <ContactRow>
            <ContactImage source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlydX8EO7PI6JyYO3izA-GtWwSbGS1DWKsLw&s'}}/>
            <View>
          <ContactTitle>Escola do Mar</ContactTitle>
          <ContactSubtitle>Angra dos Reis - RJ</ContactSubtitle>
          <ContactLink> 0800 77 00 189</ContactLink>
          </View>
          </ContactRow>
        </ContactItem>
  
        <ContactItem>
          <ContactRow>
            <ContactImage source={{uri: 'https://marbrasil.org/wp-content/uploads/2018/02/mblogo-1.png'}}/>
            <View>
          <ContactTitle>MarBrasil</ContactTitle>
          <ContactSubtitle>Paraná – PR</ContactSubtitle>
          <ContactLink> +55 (41) 3455-1419</ContactLink>
          </View>
          </ContactRow>
        </ContactItem>

        <AdLink>
            <AdLinkText>Anúncio</AdLinkText>
        </AdLink>

      </Container>
    );
  };
  