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
    imageURL:'https://cdn.discordapp.com/attachments/1289674036686753855/1304099683710537769/GustavoADS.jpg?ex=674bd2b9&is=674a8139&hm=641da88c843ccf39f21af755b69535cd96766fca088553d50e9e09d96b2d52bf&',
    title: 'Programador e Gerente do Projeto',
    showTag: true,
    type: 'Bio',
    subtitle: 'Gustavo Fioravante',
  },
  {
    id: 1,
    imageURL:'https://cdn.discordapp.com/attachments/1289674036686753855/1304096355383382036/GabeADS.jpg?ex=674bcfa0&is=674a7e20&hm=8779b0d8f450ed344a4513bc2af7c54e9a3c0ce92e29a796f5731c4f3cb548ff&',    title: 'Gerente do Projeto e Coordenador',
    showTag: true,
    type: 'Bio',
    subtitle: 'Gabriel Santana Leite',
  },
  {
    id: 2,
    imageURL:'https://cdn.discordapp.com/attachments/1289674036686753855/1304096354976665680/SalatielADS.jpg?ex=674bcf9f&is=674a7e1f&hm=142591c43ccc79991c9ac9c3e17b79edcf3dbd7ec17e14c55a6445df81c49675&',    title: 'Coordenador',
    showTag: true,
    type: 'Bio',
    subtitle: 'Salatiel Simião de Oliveira',
  },
  {
    id: 3,
    imageURL:'https://cdn.discordapp.com/attachments/1289674036686753855/1304096355731374100/CarlosADS.jpg?ex=674bcfa0&is=674a7e20&hm=800ef66085761c6f63e4c499417c62b10cb16de7894b2c21d07fffaaefff32f9&',
    title: 'Analista',
    showTag: true,
    type: 'Bio',
    subtitle: 'Carlos Eduardo Barreto Santos',
  },
  {
    id: 4,
    imageURL:'https://cdn.discordapp.com/attachments/1289674036686753855/1304096354553036850/LucasADS.jpg?ex=674bcf9f&is=674a7e1f&hm=b8ca8c63842e5e4921debda3993b86884614cf9959fd335392dd706ec1f5f52a&',   
     title: 'Analista',
    showTag: true,
    type: 'Bio',
    subtitle: 'Lucas Emídio Romeiro',
  },
  {
    id: 14,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1307487373294305351/LeoADS.jpg?ex=674b9f81&is=674a4e01&hm=7c51367c7d85d7282333e0c486ce972aa92362a6f93757f0d33505364a948c6e&',
    title: 'Analista',
    showTag: true,
    type: 'Bio',
    subtitle: 'Leonardo Araujo Silva',
  },
]

const FAKE_DATA_ICONS = [
  {
    id: 5,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1307556624965177364/poluicao-marinha-325737683.jpg?ex=673abc80&is=67396b00&hm=f052886e319499de9557daef382731b7e74ed9665cb35b7a9b6629d764420647&',
    title: 'Combatendo a Poluição Marinha',
    showTag: false,
  },
  {
    id: 6,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1307556626588499988/trafico.jpg?ex=673abc81&is=67396b01&hm=57ba5216635500bbf0913ea0d62b43baedb6a696aee82b9ff1ccc5bcfca604a5&',
    title: 'Tráfico Ilegal de Espécies Marinhas',
    description: 'null',
    showTag: false,
  },
  {
    id: 7,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1307556624516255794/pescapredatorio.jpg?ex=673abc80&is=67396b00&hm=17146ab00a2f0cb1301a0e98f6204a69580aa3f53f901c69a1ed39e0c8bddc27&',
    title: 'Ameaça da Pesca Predatória',
    description: 'null',
    showTag: false,
  },
  {
    id: 8,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1307556625980194826/recifesecorais.jpg?ex=673abc80&is=67396b00&hm=1f4341f28a476467e64696c5b6b7937b75fd8ae1aa7e88077c3a8f9b50e2d65f&',
    title: 'Destruição dos Recifes de Corais',
    description: 'null',
    showTag: false,
  },
  {
    id: 9,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1307556626349166602/sobrepesca-Chilean_purse_seine-C.-Ortiz-Rojas.jpg?ex=673abc80&is=67396b00&hm=0d9250f747e9bfd1551c66c402d3944db82db2f64eda9f7e2ab0e53cb818946c&',
    title: 'Sobrepesca de Espécies',
    description: 'null',
    showTag: false,
  },
  {
    id: 10,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1307556625556701304/poluicaoquimicanosoceanos.jpg?ex=673abc80&is=67396b00&hm=03476cb628f795ff4ea4bee9dcfad1a475348fea88b606c200e478466425f2c4&',
    title: 'Poluição Química nos Oceanos ',
    description: 'null',
    showTag: false,
  },
  {
    id: 11,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1307558482047664158/poluicaodeplastico.jpg?ex=673abe3b&is=67396cbb&hm=924b93e6d5a3c623b0e2997b87969683eb19937999da4a4c0ce5c668b3783c6d&',
    title: 'Poluição por Plástico',
    description: 'null',
    showTag: false,
  },
  {
    id: 12,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1307556623627063368/exploracaomineralsubmarina.jpg?ex=673abc80&is=67396b00&hm=7815b9788e29a0c7955de89033737bfbe4df68985485b476e1559a512f847aa6&',
    title: 'Exploração Mineral Submarina',
    description: 'null',
    showTag: false,
  },
  {
    id: 13,
    imageURL:
      'https://cdn.discordapp.com/attachments/1289674036686753855/1307556624130637864/Mudancas-climaticas-por-que-esta-mais-preocupante-scaled-1.jpg?ex=673abc80&is=67396b00&hm=27446a8abb7bb35e1007c7e5742774f04cdadc128daa6c96e5e6edcf4995f30a&',
    title: 'Mudanças Climáticas',
    description: 'null',
    showTag: false,
  },
]

export const Home = () => {
  const navigation = useNavigation()

  const handleIconPress = (id) => {
    navigation.navigate('Detail', { articleId: id })
  }

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
        title='EXPLORAR'
        data={FAKE_DATA_ICONS}
        onPressItem={(item) => handleIconPress(item.id)}
      />

        <AdLink><AdLinkText>Anúncio</AdLinkText></AdLink>

      <ContainerText>
        <TitleText>Quem nós somos?</TitleText>
        <Text>
          Somos uma microempresa iniciando no ramo de Saas. Nosso primeiro projeto está destinado
          para um movimento de conscientização sobre cuidados a vida marinha e vida sustentável para
          podermos incentivar futuras gerações a como coexistir com ecossistemas marinhos e
          preservar o atual catalogo de espécies. este projeto se destina a publico de todas as
          idades que desejam aprender mais sobre como preservar a flora marítima e sendo um projeto
          teoricamente *Opensource* (Opensource significa código aberto, em português. Quer dizer
          que uma aplicação tem seu código aberto e disponível para qualquer pessoa que pretende
          modificar e até redistribuir o software. Contudo, há restrições importantes quanto a como
          isso pode ser feito, o que visa a estabelecer certo controle e ordem.) nossos lucros veem
          através de doações, contribuições e anúncios á fim de aumentarmos o publico alvo e
          começamos a criar workshops sobre o assunto.
        </Text>

        <HomeList title='Conheça mais sobre nossa equipe!' data={FAKE_DATA_CHARACTERES} />
      </ContainerText>

      <AdLink><AdLinkText>Anúncio</AdLinkText></AdLink>

    </ScreenScrollContainer>
  )
}
