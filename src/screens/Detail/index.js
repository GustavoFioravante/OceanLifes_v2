import React from 'react'
import { Header, GoBackButton } from '../../components/Index'
import { ScreenScrollContainer } from '../../components/Container'
import { useDataStore } from '../../Services/stores/index'
import { TextContainer, Text, AdLink, AdLinkText } from './style'
import articles from '../../Services/stores/Articles'
import { marked } from 'marked'
import RenderHtml from 'react-native-render-html'
import { theme } from '../../standart/theme'

export const Detail = () => {
  const { selectedData } = useDataStore() // Recuperando o selectedData da store

  const article = articles.find((item) => item.id === selectedData.id) || {}

  const contentHTML = article.content ? marked(article.content) : ''

  return (
    <ScreenScrollContainer>
      <Header item={selectedData} onDetail />

      <TextContainer>
        {article.title && <Text>{article.title}</Text>}
        {article.content && (
          <RenderHtml
            contentWidth={300}
            color={theme.colors.white}
            source={{ html: contentHTML }}
            tagsStyles={{
              p: { color: theme.colors.white, fontSize: 18 },
              h1: { color: theme.colors.white },
              h2: { color: theme.colors.white },
            }}
          />
        )}
      </TextContainer>
      <GoBackButton />

      <AdLink>
            <AdLinkText>Anúncio</AdLinkText>
        </AdLink>

    </ScreenScrollContainer>
  )
}
