import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

export default function index() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const jogos = [
    {
      nome: 'Hades',
      ano: '2020',
      genero: 'Roguelike',
      desenvolvedora: 'Supergiant Games',
      descricao: 'Em Hades, você joga como Zagreus, filho do deus grego do submundo, tentando escapar do reino dos mortos.',
      imagem: 'https://i.ytimg.com/vi/Bz8l935Bv0Y/maxresdefault.jpg',
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
      comentario: {
        texto: 'Desafiador e lindo! Melhor jogo da FromSoftware.',
        avatar: 'https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Ragnar',
      },
    },
    {
      nome: 'Hollow Knight',
      ano: '2017',
      genero: 'Metroidvania',
      desenvolvedora: 'Team Cherry',
      descricao: 'Explore um reino subterrâneo misterioso cheio de insetos guerreiros e poderes mágicos.',
      imagem: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000003208/4643fb058642335c523910f3a7910575f56372f612f7c0c9a497aaae978d3e51',
      comentario: {
        texto: 'Arte e atmosfera incríveis. Obra-prima indie.',
        avatar: 'https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Luna',
      },
    },
    {
      nome: 'The Witcher 3',
      ano: '2015',
      genero: 'RPG de Ação',
      desenvolvedora: 'CD Projekt Red',
      descricao: 'Acompanhe Geralt de Rívia em uma das maiores aventuras de RPG com um mundo imersivo e cheio de decisões.',
      imagem: 'https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f',
      comentario: {
        texto: 'Narrativa profunda e cheia de escolhas marcantes.',
        avatar: 'https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=GeraltFan',
      },
    },
    {
      nome: 'Baldur’s Gate 3',
      ano: '2023',
      genero: 'RPG tático',
      desenvolvedora: 'Larian Studios',
      descricao: 'Um RPG inspirado em Dungeons & Dragons, com decisões impactantes e combates estratégicos por turnos.',
      imagem: [
        'https://image.api.playstation.com/vulcan/ap/rnd/202308/1519/95cce955dc59d04e2ea5ab624a823ace14e9c5f7e24dfb8f.png',
      ],
      comentario: {
        texto: 'O melhor RPG em turnos dos últimos anos!',
        avatar: 'https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Shadowheart',
      },
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>🎮 Jogos</Text>
      {jogos.map((jogo, index) => (
        <View key={index} style={styles.card}>
          {Array.isArray(jogo.imagem) ? (
            jogo.imagem.map((img, i) => (
              <Image key={i} source={{ uri: img }} style={styles.imagem} />
            ))
          ) : (
            <Image source={{ uri: jogo.imagem }} style={styles.imagem} />
          )}
          <View style={styles.info}>
            <Text style={styles.nome}>{jogo.nome}</Text>
            <Text style={styles.detalhe}>📅 Ano: {jogo.ano}</Text>
            <Text style={styles.detalhe}>🎯 Gênero: {jogo.genero}</Text>
            <Text style={styles.detalhe}>🏢 Desenvolvedora: {jogo.desenvolvedora}</Text>
            <Text style={styles.descricao}>{jogo.descricao}</Text>

            {/* Comentário */}
            <View style={styles.comentario}>
              <Image source={{ uri: jogo.comentario.avatar }} style={styles.avatar} />
              <Text style={styles.textoComentario}>{jogo.comentario.texto}</Text>
            </View>
          </View>
        </View>
      ))}
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
});
