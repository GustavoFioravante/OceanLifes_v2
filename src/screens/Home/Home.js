import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { HomeList, Header } from '../../components/Index'
import { ScreenScrollContainer } from '../../components/Container'
import FundoHeader from '../../../assets/FundoHeader.jpg'
import { WikiList } from '../../components/Index'
import { ContainerText, Text, TitleText, AdLink, AdLinkText } from './styles'

const FAKE_DATA_CHARACTERES = [
  {
    id: 0,
    imageURL:'https://64.media.tumblr.com/73aa34c35d6698a4d08525ac36382e5b/d7261788af8aa4b3-35/s400x600/f603472e204ec27c4a9cd1795c964976100463ca.jpg',
    title: 'Programador e Gerente do Projeto',
    showTag: true,
    type: 'Bio',
    subtitle: 'Gustavo Fioravante',
  },
  {
    id: 1,
    imageURL:'https://64.media.tumblr.com/f476d2fec90a72bf8c6ecf64c015d53d/d7261788af8aa4b3-76/s540x810/8201608a562a2d2f6d9403bb1da148ec94aed98f.jpg',
    title: 'Gerente do Projeto e Coordenador',
    showTag: true,
    type: 'Bio',
    subtitle: 'Gabriel Santana Leite',
  },
  {
    id: 2,
    imageURL:'https://64.media.tumblr.com/377b75c695551d788f54ac4b9b249745/d7261788af8aa4b3-dd/s400x600/4d0e283ecbcefbc146d32149c9f3847c97483034.jpg',
    title: 'Coordenador',
    showTag: true,
    type: 'Bio',
    subtitle: 'Salatiel Simião de Oliveira',
  },
  {
    id: 3,
    imageURL: 'https://64.media.tumblr.com/a036c9fa373203492be03c5032237c2c/d7261788af8aa4b3-53/s400x600/0e514d852c3e7c8627f0f1d321650e1c6f7de8b4.jpg',
    title: 'Analista',
    showTag: true,
    type: 'Bio',
    subtitle: 'Carlos Eduardo Barreto Santos',
  },
  {
    id: 4,
    imageURL:'https://64.media.tumblr.com/6ede4f14fde0ccd4c63fde23fba99dfc/d7261788af8aa4b3-a9/s1280x1920/757c20121cd2ac8fa7de8b2d1c7726c7c5463a8b.jpg',   
     title: 'Analista',
    showTag: true,
    type: 'Bio',
    subtitle: 'Lucas Emídio Romeiro',
  },
  {
    id: 14,
    imageURL:
      'https://64.media.tumblr.com/10344afb2e202ff5e6b2fba9a68acb82/d7261788af8aa4b3-1f/s540x810/75b6a647e336cb7b4e141bceaa55fed7e66faeab.jpg',
    title: 'Analista',
    showTag: true,
    type: 'Bio',
    subtitle: 'Leonardo Araujo Silva',
  },
]

const FAKE_DATA_ICONS = [
  {
    id: 5,
    imageURL:'https://64.media.tumblr.com/74544a8808bb47af9f7d4828a129fb72/d7261788af8aa4b3-53/s250x400/d261ba540736b05a61df6b751a424b6b0e441c6f.pnj',
    title: 'Combatendo a Poluição Marinha',
    showTag: false,
  },
  {
    id: 6,
    imageURL:'https://64.media.tumblr.com/261cd9f17949822082ded060d9192051/d7261788af8aa4b3-ba/s250x400/274d30e8ade35f0bf324f8bdae8f9319f3873612.pnj',
    title: 'Tráfico Ilegal de Espécies Marinhas',
    description: 'null',
    showTag: false,
  },
  {
    id: 7,
    imageURL:'https://64.media.tumblr.com/7d0a7790b3a28f067d47ff9ceb9dde3b/d7261788af8aa4b3-46/s250x400/c68a419b14a93632b34a5f5d4fc9550453972f1d.pnj',
    title: 'Ameaça da Pesca Predatória',
    description: 'null',
    showTag: false,
  },
  {
    id: 8,
    imageURL:'https://64.media.tumblr.com/51d601292acf7ff93dadd72b43b48bb8/d7261788af8aa4b3-78/s250x400/ac8d28c65b19e41a03faf0c51088e9d80e90e0fd.pnj',
    title: 'Destruição dos Recifes de Corais',
    description: 'null',
    showTag: false,
  },
  {
    id: 9,
    imageURL:'https://64.media.tumblr.com/205c0d9ba551d8858c8862551499b196/d7261788af8aa4b3-1d/s250x400/5d03913f11ce6eae6ee5cb0a21d7347ee2aaa659.pnj',
    title: 'Sobrepesca de Espécies',
    description: 'null',
    showTag: false,
  },
  {
    id: 10,
    imageURL:'https://64.media.tumblr.com/ed7c2559fb885c8f636533c15e64a3b3/d7261788af8aa4b3-cc/s250x400/c3584092930ccc75ecc16b9753e622f45ec2c333.pnj',
    title: 'Poluição Química nos Oceanos ',
    description: 'null',
    showTag: false,
  },
  {
    id: 11,
    imageURL:'https://64.media.tumblr.com/2cec3bda15fbe3f0c43126eb78fd15a3/d7261788af8aa4b3-b2/s250x400/87c1401d3c0c7141ad834a081d2fd796dda3d380.pnj',
    title: 'Poluição por Plástico',
    description: 'null',
    showTag: false,
  },
  {
    id: 12,
    imageURL:'https://64.media.tumblr.com/0df13ad4df61b3b16c6057ff87fa03a6/d7261788af8aa4b3-db/s250x400/1e79db901cf88285676ce224a060683861a2d87b.pnj',
    title: 'Exploração Mineral Submarina',
    description: 'null',
    showTag: false,
  },
  {
    id: 13,
    imageURL:'https://64.media.tumblr.com/08c2e1e41d8bb46d9e1b971c97d40144/d7261788af8aa4b3-31/s250x400/0d78ae36546f8fa4b42d9e7b3f473c14b9e38a06.pnj',
    title: 'Mudanças Climáticas',
    description: 'null',
    showTag: false,
  },
]

export const Home = () => {
  const navigation = useNavigation();

  const teamData = FAKE_DATA_CHARACTERES;

  const handleIconPress = (id, type) => {
    if (type !== 'Bio') {
      navigation.navigate('Detail', { articleId: id });
    }
  };;

  return (
    <ScreenScrollContainer>
      <Header
        item={{
          title: 'OceanLifes',
          subtitle: 'A vida na água importa!',
          showTag: true,
          type: 'Wiki',
          imageURL: FundoHeader,
        }}
      />

      <WikiList
        title="EXPLORAR"
        data={FAKE_DATA_ICONS}
        onPressItem={(item) => handleIconPress(item.id, item.type)}
      />

      <AdLink>
        <AdLinkText>Anúncio</AdLinkText>
      </AdLink>

      <ContainerText>
        <TitleText>Quem nós somos?</TitleText>
        <Text>
          Somos uma microempresa iniciando no ramo de Saas. Nosso primeiro
          projeto está destinado para um movimento de conscientização sobre cuidados a vida
          marinha e vida sustentável para podermos incentivar futuras gerações a como coexistir com
          ecossistemas marinhos e preservar o atual catalogo de espécies. Este projeto se destina a
          público de todas as idades que desejam aprender mais sobre como preservar a flora marítima
          e sendo um projeto teoricamente *Opensource* (Opensource significa código aberto, em
          português. Quer dizer que uma aplicação tem seu código aberto e disponível para qualquer
          pessoa que pretende modificar e até redistribuir o software. Contudo, há restrições
          importantes quanto a como isso pode ser feito, o que visa a estabelecer certo controle e
          ordem.) Nossos lucros vêm através de doações, contribuições e anúncios a fim de
          aumentarmos o público alvo e começarmos a criar workshops sobre o assunto.
        </Text>

        <HomeList
          title="Conheça mais sobre nossa equipe!"
          data={teamData}
          onPressItem={null}
        />
      </ContainerText>


      <AdLink><AdLinkText>Anúncio</AdLinkText></AdLink>

    </ScreenScrollContainer>
  )
}
