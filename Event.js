import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
     
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />

    </View>
  );
};

const SECTIONS = [
  {
    title: 'Eventos',
    horizontal: false,
    data: [
      {
        key: '1',
        text: 'Bem-vindos ao evento "Jornada do Viajante" de Genshin Impact! Nesta emocionante aventura, os jogadores terão a oportunidade de explorar o vasto mundo de Teyvat em busca de tesouros escondidos e desafios incríveis. Durante o evento, os jogadores terão a chance de desbloquear uma série de missões emocionantes que os levarão em uma jornada através das terras mágicas de Genshin Impact. Com cada missão concluída, os jogadores serão recompensados com itens valiosos, como equipamentos poderosos, materiais de ascensão e muito mais.',
        uri: 'https://play-lh.googleusercontent.com/kp-90Yulh8aEg_uL8convCrERwGU8ooRNzOO-iEcoMx-OgoIBg2kVKkgQ9YxfUsYJn8=w240-h480-rw',
      },
      {
        key: '2',
        text:'Seja bem-vindo(a) ao evento "FIFA Mobile FUT Champions"! Esta é a sua chance de competir com os melhores jogadores de futebol do mundo e provar que você é o melhor. Durante este evento emocionante, os jogadores terão a oportunidade de participar de torneios exclusivos que vão desafiar suas habilidades em campo. Com cada vitória, você irá progredir para a próxima rodada, enfrentando adversários cada vez mais difíceis.Mas isso não é tudo. O "FIFA Mobile FUT Champions" também oferece recompensas incríveis para os jogadores vitoriosos. Desde pacotes de cartas exclusivos até itens de personalização incríveis para sua equipe, este evento tem tudo o que você precisa para se destacar no mundo do futebol virtual.',
        uri: 'https://play-lh.googleusercontent.com/MUc561H_AeA4lUfUzyo0-6ZgikC6xrblMMPcbOTNC61iXb9hbfV9guj5IKiXAMfpumJw',
      },

      {
        key: '3',
        text: 'Bem-vindo(a) ao evento "Minecraft Block Party"! Este evento emocionante é uma celebração do incrível mundo do Minecraft, onde os jogadores podem se juntar para explorar, construir e competir em jogos incríveis. Durante o "Minecraft Block Party", você terá a oportunidade de participar de vários desafios emocionantes que testarão suas habilidades no jogo. Desde corridas épicas de parkour até batalhas emocionantes entre equipes, este evento tem algo para todos. Mas isso não é tudo! O "Minecraft Block Party" também oferece uma série de recompensas incríveis para os jogadores que participam. Desde itens exclusivos de personalização até equipamentos poderosos, você terá a oportunidade de sair deste evento com tesouros valiosos.',
        uri: 'https://play-lh.googleusercontent.com/VSwHQjcAttxsLE47RuS4PqpC4LT7lCoSjE7Hx5AW_yCxtDvcnsHHvm5CTuL5BPN-uRTP',
      },
      {
        key: '4',
        text: 'Bem-vindo(a) ao evento "Roblox Builders Bash! Este evento emocionante é um verdadeiro festival de criatividade e diversão, onde os jogadores de Roblox podem se juntar para construir, jogar e competir em uma série de desafios incríveis. Durante o Roblox Builders Bash, você terá a chance de mostrar suas habilidades de construção em uma série de desafios exclusivos. Desde construir estruturas épicas em um tempo limitado até criar jogos incríveis para competir com outros jogadores, este evento é um verdadeiro teste de suas habilidades criativas. Mas isso não é tudo! O "Roblox Builders Bash também oferece uma série de recompensas incríveis para os jogadores mais talentosos. Desde itens exclusivos de personalização até Robux, você terá a chance de ganhar prêmios valiosos enquanto se diverte com seus amigos em Roblox.',
        uri: 'https://play-lh.googleusercontent.com/WNWZaxi9RdJKe2GQM3vqXIAkk69mnIl4Cc8EyZcir2SKlVOxeUv9tZGfNTmNaLC717Ht',
      },
    ],
  },
];





const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 20,
    color: '#f4f4f4',
    marginTop: 10,
    marginBottom: 5,
    margin:0,
    padding:10,
    borderRadius:9,
  },
  item: {
    margin: 5,
  },
  itemPhoto: {
    width: 330,
    height: 300,
  },
  itemText: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 7,
    padding:5,
  },
});