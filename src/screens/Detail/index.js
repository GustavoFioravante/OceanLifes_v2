import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Header, GoBackButton } from '../../components/Index'
import { ScreenScrollContainer } from '../../components/Container'
import { useDataStore } from '../../Services/stores/index'
import { TextContainer, Text, AdLink, AdLinkText } from './style'
import articles from '../../Services/stores/Articles'
import { marked } from 'marked'
import RenderHtml from 'react-native-render-html'
import { theme } from '../../standart/theme'
import { Ionicons } from '@expo/vector-icons' 

export const Detail = () => {
  const { selectedData } = useDataStore(); // Recuperando o selectedData da store
  const [rating, setRating] = useState(0); // Estado para armazenar a avaliação

  const article = articles.find((item) => item.id === selectedData.id) || {};

  const contentHTML = article.content ? marked(article.content) : '';

  const handleStarPress = (star) => {
    setRating(star);
    alert(`Você avaliou com ${star} estrelas. Obrigado!`); // Exemplo de feedback ao usuário
  };

  const showRating = selectedData.type !== 'Bio'; // Condição para exibir avaliação

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

      {/* Mostra as estrelas apenas se não for um integrante da equipe */}
      {showRating && (
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 20 }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => handleStarPress(star)}>
              <Ionicons
                name={star <= rating ? 'star' : 'star-outline'}
                size={30}
                color={theme.colors.yellow}
                style={{ marginHorizontal: 5 }}
              />
            </TouchableOpacity>
          ))}
        </View>
      )}

      <GoBackButton />

      <AdLink>
        <AdLinkText>Anúncio</AdLinkText>
      </AdLink>
    </ScreenScrollContainer>
  );
};
