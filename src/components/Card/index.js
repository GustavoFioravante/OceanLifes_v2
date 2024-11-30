import React from 'react'
import { CardContainer, CardImage, CardTitle } from './styles'
import { useNavigation } from '@react-navigation/native'
import { useDataStore } from '../../Services/stores/index'
import PropTypes from 'prop-types'

export const Card = ({ item, showTitle = false }) => {
  const { setSelectedData } = useDataStore()
  const navigation = useNavigation()

  const onSelectItem = () => {
    setSelectedData(item)
    navigation.navigate('Detail')
  }

  return (
    <CardContainer onPress={() => onSelectItem()}>
      <CardImage source={{ uri: item.imageURL }} />
      {showTitle && <CardTitle>{item.title}</CardTitle>}
    </CardContainer>
  )
}

Card.propTypes = {
  item: PropTypes.shape({
    imageURL: PropTypes.string,
    title: PropTypes.string,
  }),
  showTitle: PropTypes.bool,
}
