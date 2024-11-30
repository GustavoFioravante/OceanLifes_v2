import React from 'react'
import { HeaderContainer, HeaderImageBackground, HeaderGradient, ButtonsView } from './style'
import { colors } from '../../standart/colors'
import { IconButton } from '../IconButton/index'
import { Text } from '../Text/Text'
import { Tag } from '../Tagg'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native' 
import { theme } from '../../standart/theme'

export const Header = ({ item, onDetail }) => {
  const { imageURL, title, subtitle, type, showTag } = item || {}
  const navigation = useNavigation() 

  
  const openMenu = () => {
    navigation.openDrawer() 
  }

  return (
    <HeaderContainer>
      <HeaderImageBackground source={typeof imageURL === 'string' ? { uri: imageURL } : imageURL}>
        <HeaderGradient colors={['transparent', 'transparent', colors.AliceBlue]}>
          <ButtonsView>
            {!onDetail && <IconButton label='' iconName='list' onPress={openMenu} />}
          </ButtonsView>
          {showTag && <Tag mt={onDetail ? 240 : 215}>{type}</Tag>}
          <View style={{ position: 'absolute', top: 360, left: 30 }}>
            <Text fontFamily={'bold'} size={30} mt={14} ml={10} color={theme.colors.DarkBlue}>
              {title}
            </Text>
            <Text fontFamily={'boldRegular'} size={25} color={'white'} lh={25} ml={13} mt={5}>
              {subtitle}
            </Text>
          </View>
        </HeaderGradient>
      </HeaderImageBackground>
    </HeaderContainer>
  )
}

Header.propTypes = {
  item: PropTypes.shape({
    imageURL: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    type: PropTypes.string,
    showTag: PropTypes.bool,
  }).isRequired,
}
