import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal, FlatList, Dimensions, Alert } from 'react-native';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';


const screenWidth = Dimensions.get('window').width;


export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular });
  const [modalVisible, setModalVisible] = useState(false);
  const [curiosidadesSelecionadas, setCuriosidadesSelecionadas] = useState([]);
  
  useEffect(() => {
    Alert.alert(
      "Dica!",
      "Clique nas imagens para ver curiosidades sobre os jogos. 🎮",
      [{ text: "OK", style: "default" }]
    );
  }, []);
  
  
  if (!fontsLoaded) return <AppLoading />;

  const jogos = [
    {
      nome: 'Hades',
      ano: '2020',
      genero: 'Roguelike',
      desenvolvedora: 'Supergiant Games',
      descricao: 'Em Hades, você joga como Zagreus, filho do deus grego do submundo, tentando escapar do reino dos mortos.',
      imagem: 'https://i.ytimg.com/vi/Bz8l935Bv0Y/maxresdefault.jpg',
      curiosidades: [
        'Hades levou mais de 3 anos para ser desenvolvido.',
        'A arte do jogo foi feita por apenas um artista principal.',
        'A trilha sonora foi composta por Darren Korb.',
        'A mitologia grega foi reinterpretada com toques modernos.',
        'Zagreus não é um personagem comum na mitologia.',
      ],
      imagensExtras: [
        'https://i.ytimg.com/vi/Bz8l935Bv0Y/maxresdefault.jpg',
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145360/ss_fa48b583bfd1423561c6efdd6690b30acd85887c.1920x1080.jpg?t=1715722799',
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145360/ss_c0fed447426b69981cf1721756acf75369801b31.1920x1080.jpg?t=1715722799',
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145360/ss_34e6660705cfe47d2b2f95189c37f7cb77f75ca6.1920x1080.jpg?t=1715722799',
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145360/ss_07ac15de74269ca40b7ef35f502315ae0116f1ae.1920x1080.jpg?t=1715722799',
      ],
      comentario: {
        texto: 'Jogo viciante com ótimo gameplay e trilha sonora!',
        avatar: 'https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Athena',
      },
    },
    {
      nome: 'Elden Ring',
      ano: '2022',
      genero: 'Soullike',
      desenvolvedora: 'FromSoftware',
      descricao: 'Um vasto mundo aberto cheio de segredos, chefes desafiadores e narrativa criada por George R.R. Martin.',
      imagem: 'https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/YMUoJUYNX0xWk6eTKuZLr5Iw.jpg',
      curiosidades: [
        'George R.R. Martin ajudou a criar a história do mundo do jogo.',
        'O mapa é o maior já feito pela FromSoftware.',
        'O jogo tem várias referências ao mangá Berserk.',
        'Possui 6 finais diferentes, dependendo das suas escolhas.',
        'Tem uma tartaruga gigante com chapéu que é um padre e ensina magias.'
      ],
      imagensExtras: [
        'https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/YMUoJUYNX0xWk6eTKuZLr5Iw.jpg',
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/ss_943bf6fe62352757d9070c1d33e50b92fe8539f1.1920x1080.jpg?t=1739922037',
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/ss_3c41384a24d86dddd58a8f61db77f9dc0bfda8b5.1920x1080.jpg?t=1739922037',
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/ss_ef61b771ee6b269b1f0cb484233e07a0bfb5f81b.1920x1080.jpg?t=1739922037',
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/ss_c2baf8aada6140beee79d701d14043899e91af47.1920x1080.jpg?t=1739922037',
      ],
      comentario: {
        texto: 'Desafiador e lindo! Melhor jogo da FromSoftware.',
        avatar: 'https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Ragnar'
      },
    },
    {
      nome: 'Hollow Knight',
      ano: '2017',
      genero: 'Metroidvania',
      desenvolvedora: 'Team Cherry',
      descricao: 'Explore um reino subterrâneo misterioso cheio de insetos guerreiros e poderes mágicos.',
      curiosidade: 'Hollow Knight foi feito por apenas três pessoas e se tornou um dos maiores sucessos indie.',
      imagem: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000003208/4643fb058642335c523910f3a7910575f56372f612f7c0c9a497aaae978d3e51',
      curiosidades: [
        'Foi feito por apenas três pessoas do estúdio indie Team Cherry.',
        'O jogo foi financiado via Kickstarter com apoio da comunidade.',
        'O mundo se chama Hallownest e é totalmente interconectado.',
        'A trilha sonora foi composta por Christopher Larkin e é super elogiada.',
        'Existe um modo secreto chamado "Modo Fantasma" com desafio extra.',
      ],
      imagensExtras: [
        'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000003208/4643fb058642335c523910f3a7910575f56372f612f7c0c9a497aaae978d3e51',
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/ss_2329fe632e788efd9ece9dcfc98c0ea723ac0d04.1920x1080.jpg?t=1695270428',
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/ss_a81e4231cc8d55f58b51a4a938898af46503cae5.1920x1080.jpg?t=1695270428',
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/ss_bd76bd88bc5334ee56ae3d5f0d8dec4455e8e3b8.1920x1080.jpg?t=1695270428',
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/ss_1552562bd322fb94fd8c5a6595e75f1e6808db41.1920x1080.jpg?t=1695270428',
      ],
      comentario: {
        texto: 'Arte e atmosfera incríveis. Obra-prima indie.',
        avatar: 'https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Luna'
      },
    },
    {
      nome: 'The Witcher 3',
      ano: '2015',
      genero: 'RPG de Ação',
      desenvolvedora: 'CD Projekt Red',
      descricao: 'Acompanhe Geralt de Rívia em uma das maiores aventuras de RPG com um mundo imersivo e cheio de decisões.',
      imagem: 'https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f',
      curiosidades: [
        'Geralt pode ter 36 finais diferentes, dependendo das escolhas do jogador.',
        'O mundo do jogo é 35 vezes maior que o do The Witcher 2.',
        'O ator Doug Cockle é a voz de Geralt desde o primeiro jogo.',
        'Você pode usar poções e óleos para se preparar estrategicamente antes das lutas.',
        'A famosa montaria Carpeado (Roach) pode ser invocada em quase qualquer lugar!',
      ],
      imagensExtras: [
        'https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f',
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/ss_5710298af2318afd9aa72449ef29ac4a2ef64d8e.1920x1080.jpg?t=1736424367',
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/ss_0901e64e9d4b8ebaea8348c194e7a3644d2d832d.1920x1080.jpg?t=1736424367',
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/ss_112b1e176c1bd271d8a565eacb6feaf90f240bb2.1920x1080.jpg?t=1736424367',
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/ss_8ac1dc847388e59b1be1c5ea5ca592d5861756cc.1920x1080.jpg?t=1736424367',
      ],
      comentario: {
        texto: 'Narrativa profunda e cheia de escolhas marcantes.',
        avatar: 'https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=GeraltFan'
      },
    },
    {
      nome: 'Baldur’s Gate 3',
      ano: '2023',
      genero: 'RPG tático',
      desenvolvedora: 'Larian Studios',
      descricao: 'Um RPG inspirado em Dungeons & Dragons, com decisões impactantes e combates estratégicos por turnos.',
      imagem: 'https://image.api.playstation.com/vulcan/ap/rnd/202308/1519/95cce955dc59d04e2ea5ab624a823ace14e9c5f7e24dfb8f.png',
      curiosidades: [
        'O jogo é baseado nas regras de Dungeons & Dragons 5ª edição.',
        'Você pode formar relacionamentos românticos com vários personagens.',
        'A história começa com o herói infectado por um parasita mental.',
        'Cada decisão tem impacto real na narrativa e múltiplos finais.',
        'É possível se transformar em animais, como gato, aranha e urso!',
      ],
      imagensExtras: [
        'https://image.api.playstation.com/vulcan/ap/rnd/202308/1519/95cce955dc59d04e2ea5ab624a823ace14e9c5f7e24dfb8f.png',
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/ss_c73bc54415178c07fef85f54ee26621728c77504.1920x1080.jpg?t=1740386911',
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/ss_73d93bea842b93914d966622104dcb8c0f42972b.1920x1080.jpg?t=1740386911',
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/ss_cf936d31061b58e98e0c646aee00e6030c410cda.1920x1080.jpg?t=1740386911',
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/ss_f8c7fcdeccbfe77e3fad33330a464fed30f781f0.1920x1080.jpg?t=1740386911',
      ],
      comentario: {
        texto: 'O melhor RPG em turnos dos últimos anos!',
        avatar: 'https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Shadowheart'
      },
    },
  ];

  const abrirCuriosidades = (curiosidades, imagensExtras) => {
    setCuriosidadesSelecionadas({ curiosidades, imagensExtras });
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>🎮 Jogos</Text>
      {jogos.map((jogo, index) => (
        <View key={index} style={styles.card}>
          <TouchableOpacity onPress={() => abrirCuriosidades(jogo.curiosidades, jogo.imagensExtras)}>
            {Array.isArray(jogo.imagem) ? (
              jogo.imagem.map((img, i) => (
                <Image key={i} source={{ uri: img }} style={styles.imagem} />
              ))
            ) : (
              <Image source={{ uri: jogo.imagem }} style={styles.imagem} />
            )}
          </TouchableOpacity>
          <View style={styles.info}>
            <Text style={styles.nome}>{jogo.nome}</Text>
            <Text style={styles.detalhe}>📅 Ano: {jogo.ano}</Text>
            <Text style={styles.detalhe}>🎯 Gênero: {jogo.genero}</Text>
            <Text style={styles.detalhe}>🏢 Desenvolvedora: {jogo.desenvolvedora}</Text>
            <Text style={styles.descricao}>{jogo.descricao}</Text>
            <View style={styles.comentario}>
              <Image source={{ uri: jogo.comentario.avatar }} style={styles.avatar} />
              <Text style={styles.textoComentario}>{jogo.comentario.texto}</Text>
            </View>
          </View>
        </View>
      ))}

      {}
      <Modal animationType="fade" visible={modalVisible} transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.curiosidadesTitulo}>📌 Curiosidades</Text>
            <FlatList
              horizontal
              pagingEnabled
              data={curiosidadesSelecionadas.imagensExtras}
              renderItem={({ item }) => (
                <Image source={{ uri: item }} style={styles.imagemExtra} />
              )}
              keyExtractor={(_, i) => i.toString()}
              style={styles.carousel}
            />
            {curiosidadesSelecionadas.curiosidades?.map((curio, i) => (
              <Text key={i} style={styles.curiosidadeTexto}>• {curio}</Text>
            ))}
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.fecharBtn}>
              <Text style={styles.fecharTexto}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#B0BEC5',
  },
  titulo: {
    fontSize: 24,
    fontFamily: 'Poppins_400Regular',
    marginBottom: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  card: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  imagem: {
    width: '100%',
    height: 200,
    backgroundColor: '#eee',
  },
  info: {
    padding: 12,
  },
  nome: {
    fontSize: 18,
    fontFamily: 'Poppins_400Regular',
    color: '#000',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  detalhe: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#666',
  },
  descricao: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
    color: '#444',
    fontFamily: 'Poppins_400Regular',
  },
  comentario: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    backgroundColor: '#f9f9f9',
    padding: 8,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#607D8B',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  textoComentario: {
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
    color: '#333',
    flex: 1,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  }, 
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    width: '90%',
    maxHeight: '80%',
  },
  curiosidadesTitulo: {
    fontSize: 20,
    fontFamily: 'Poppins_400Regular',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  curiosidadeTexto: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    marginVertical: 4,
    color: '#333',
  },
  fecharBtn: {
    marginTop: 20,
    backgroundColor: '#607D8B',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'center',
  },
  fecharTexto: {
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
  },
  imagemExtra: {
    width: screenWidth * 0.75,
    height: 180,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});

