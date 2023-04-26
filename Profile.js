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
        text: 'Nubank',
        uri: 'https://play-lh.googleusercontent.com/NPkx0aiwABB31gBw_CuZO9Rwukhir-BwemxfNlAVjT6smwk6QgUbb3XrmsSSClfzk0dY=w240-h480-rw',
      },
      {
        key: '2',
        text: 'Shopee',
        uri: 'https://play-lh.googleusercontent.com/DV_4Ktbg06Tv1kbIBwmAsiVLWozguN86QTlUwNb4SKb1ZECmrC4xr1HErRY7lgyTOSU',
      },

      {
        key: '3',
        text: 'gov.br',
        uri: 'https://play-lh.googleusercontent.com/qn6t9aaqbxUJDl9SMRlBkgG6SArPRfk_g_m5lyG6SjhpUfiW1PsHuJ6jSuL9GVDqnA',
      },
      {
        key: '4',
        text: 'CapCut ',
        uri: 'https://play-lh.googleusercontent.com/MO4jVMbqskWrBD7BDUiKkymLPDMlSFjnEE-JTCigWv6UcoENgAkSKr8bs0IvPs8Twv8=w240-h480-rw',
      },
      {
        key: '5',
        text: 'Roblox',
        uri: 'https://play-lh.googleusercontent.com/WNWZaxi9RdJKe2GQM3vqXIAkk69mnIl4Cc8EyZcir2SKlVOxeUv9tZGfNTmNaLC717Ht',
      },
      {
        key:'6',
        text:'Subway Surfers',
        uri:'https://play-lh.googleusercontent.com/IHpPJDyaTx3wZ6Bqk5RRI3d1SxDlq_hiR8UQ7A7XpZ3t7d4qehI0OTUkqp8wy3b6SQ=w240-h480-rw',
      }
    ],
  },
  {
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Instagram',
        uri: 'https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM',
      },
      {
        key: '2',
        text: 'WhatsApp Messenger',
        uri: 'https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN',
      },

      {
        key: '3',
        text: 'SHEIN',
        uri: 'https://play-lh.googleusercontent.com/e9FXWFNT_9cL6yPiITu38t3wNLXd5lxohnq1tQQGJhvqsWw-pf4FnDX9zhod5R1jag',
      },
      {
        key: '4',
        text: 'TikTok',
        uri: 'https://play-lh.googleusercontent.com/OS-MhSWOPtlUZLt0_UP5TI4juSf0XhyHxGfJa6pA-UIYkZ1BB6QHTZwaMEzZDPqYsmk',
      },
      {
        key: '5',
        text: 'Snapchat',
        uri: 'https://play-lh.googleusercontent.com/KxeSAjPTKliCErbivNiXrd6cTwfbqUJcbSRPe_IBVK_YmwckfMRS1VIHz-5cgT09yMo',
      },
      {
        key:'6',
        text:'Facebook',
        uri:'https://play-lh.googleusercontent.com/ccWDU4A7fX1R24v-vvT480ySh26AYp97g1VrIB_FIdjRcuQB2JP2WdY7h_wVVAeSpg',
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