import React from 'react'
import { Text } from '../Text/Text'
import { WikiContainer } from './style'
import { FlatList } from 'react-native'
import { theme } from '../../standart/theme'
import { Card } from '../Card'

export const WikiList = ({ data, title }) => {
  return (
    <WikiContainer>
      <Text ml={24} fontFamily='semiBold' size={20} color={theme.colors.DarkBlue} ls={-1}>
        {title}
      </Text>
      <FlatList
        vertical
        data={data}
        renderItem={({ item }) => <Card item={item} showTitle={true} />}
        keyExtractor={(item) => String(item.id)}
        scrollEnabled={false}
        numColumns={3}
        contentContainerStyle={{
          paddingTop: theme.metrics.px(30),
          paddingLeft: theme.metrics.px(10),
        }}
      />
    </WikiContainer>
  )
}
