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
    title: 'Apps e Jogos',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Learn to Read - Duolingo ABC',
        uri: 'https://play-lh.googleusercontent.com/Ppq8aCE9G9S6aVvhXJ2GM6j5JkCF88om_RzvQ9wWnDMxh9_dVVi56MPL-SKuvtMJM7Q',
      },
      {
        key: '2',
        text: 'Endless Reader',
        uri: 'https://play-lh.googleusercontent.com/FFPAR7s4pAqmt0Q2Fed75upm_UczC_MOFGntLsbD1licKBDa2ZMS_eRwp1jRCx8CD3sJ',
      },

      {
        key: '3',
        text: 'Bebê Tubarão ABC Fonética',
        uri: 'https://play-lh.googleusercontent.com/_pUI64Qr3S6rcjf2Z0XEHDarb0r_Bz_n8DvB2xPIxIXyLKEsrXE14K9cOwDSM9GnbKxK',
      },
      {
        key: '4',
        text: 'Teach Your Monster to Read',
        uri: 'https://play-lh.googleusercontent.com/y98GqvvJ6hlXT-BkMaP6xHMd2vhnec9fUVzpaZg-QKigoXNpkEZvNdNrUlIrOW4DMEJ1',
      },
      {
        key: '5',
        text: 'HOMER: Fun Learning For Kids',
        uri: 'https://play-lh.googleusercontent.com/Lo-vdTqTrVww__H4jxQPdNyrl8zTXnFqqkDai8YpGbiwCZDMCzjfKsxEstOGE9GVmnXz',
      },
      {
        key:'6',
        text:'Toca Life World',
        uri:'https://play-lh.googleusercontent.com/f5wqZDhNfdy5LPivSmyRu2ylFm9Ly63ccuUQafddvXf9USqsraJ82yf3JrfBGSSQ1npf',
      }
    ],
  },
  {
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Kahoot',
        uri: 'https://play-lh.googleusercontent.com/AyJnaQ0JfEu-F_4bop5hH4qpJwYJ1blePyer6VVUUm4Al80uWJBje4UZHirrf39wI7uI',
      },
      {
        key: '2',
        text: 'Toca Kitchen 2',
        uri: 'https://play-lh.googleusercontent.com/7X8jrMNUyu8X4hs7WFNpEOV77xNc7agNTUOAFd6Kx3sw1XrlX7ZicIQQvVt7SOCYTqQ',
      },

      {
        key: '3',
        text: 'Mundo Bebê Tubarão pra Criança',
        uri: 'https://play-lh.googleusercontent.com/KwwCP_Dvb3khta8BFnw0ePg44it0uIRB75nNH8BuK_glKMSE4a1XcIs7_uc44Z1emlpm',
      },
      {
        key: '4',
        text: 'YouTube Kids',
        uri: 'https://play-lh.googleusercontent.com/S4wylkvt2jz16hnG9IG0pAZosbB82nWWy8P-rQkb54uH-SCVd5L2j7z7x1Vz5pZvIRc',
      },
      {
        key: '5',
        text: 'Toca Hair Salon 4',
        uri: 'https://play-lh.googleusercontent.com/rs_72pHNSvwk0r1p-bvYf-rpYIpuogM05ICTpyOV7azj6oHWaHHbBOiJwvg0ynA_eoE',
      },
      {
        key:'6',
        text:'Jogo de Sorvete do Panda',
        uri:'https://play-lh.googleusercontent.com/ndN5E-X6veKphTObIhEeiDk_hP08Ze1lGyHJy1GZgB09YSeArsNqoj7_Nx3aH5s_vg',
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
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 5,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
  },
});