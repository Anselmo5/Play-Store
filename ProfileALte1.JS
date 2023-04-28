import * as React from 'react';
import Profile from '../Flatlist/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet, Image, TextInput,Card, Linking,Button, Pressable, } from 'react-native';

export default function ProfileALte1({navigation}) {

  const alerta = () => {
    alert("funcionou")
  }

  return (
    <View style={styles.container}>      
      <Image style={styles.logo} source={require('../assets/d.jpg')} />
       <TextInput style={styles.input}
       placeholder="Pesquisar Apps e Jogos"
      />
    <View style={styles.textform}> 
        <Pressable  style={styles.text2}  onPress={() => navigation.navigate('PlayStore')}>
          <Text style={styles.text1} >Para Voce</Text>
        </Pressable>
        <Pressable style={styles.text3}  onPress={() => navigation.navigate('Crianças')}>
          <Text style={styles.text1} >Criancas</Text>
        </Pressable>
        <Pressable style={styles.text4}  onPress={() => navigation.navigate('Eventos')}>
          <Text style={styles.text1} >Eventos</Text>
        </Pressable>
      </View>
      
  <Profile/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor:'#272727',
  },
  logo: {
    height: 50,
    width: 50,
    borderRadius:200,
    bottom:0,
    marginLeft:240,
  },
  input:{
    bottom:40,
    marginRight:80,
    width:240,
    height:40,
    backgroundColor:'#474747',
    padding:10,
    borderRadius:5,
    color:'#fff',
    fontSize:15,
  },

  textform:{
    bottom:35,
    width:350,
    borderRadius:8,
    displat:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    marginRight:100,

  },
  text1:{
    color:'#fff',
    margin:10,
  }
});