import React from 'react'
import { FlatList } from 'react-native'
import { Card } from '../Card'
import { Text } from '../Text/Text'
import { ListContainer } from './styles'
import { theme } from '../../standart/theme'

export const HomeList = ({ data, title }) => {
  return (
    <ListContainer>
      <Text ml={10} fontFamily='semiBold' size={23} color={'white'} ls={-1}>
        {title}
      </Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{
          paddingTop: theme.metrics.px(12),
          paddingLeft: theme.metrics.px(10),
        }}
      />
    </ListContainer>
  )
}
