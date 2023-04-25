import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput,Card, Linking,Button, Pressable } from 'react-native';

export default function AssetExample() {

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
        <Pressable onPress={() => alerta()}>
          <Text style={styles.text1} >Para Voce</Text>
        </Pressable>
        <Pressable  style={styles.text2}  onPress={() => alerta()}>
          <Text style={styles.text1} >Em Alta</Text>
        </Pressable>
        <Pressable style={styles.text3}  onPress={() => alerta()}>
          <Text style={styles.text1} >Crianca</Text>
        </Pressable>
        <Pressable style={styles.text4}  onPress={() => alerta()}>
          <Text style={styles.text1} >Eventos</Text>
        </Pressable>
      
      </View>
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
    bottom:155,
    marginLeft:260,
  },
  input:{
    bottom:200,
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
    bottom:180,
    width:350,
    borderRadius:8,
    displat:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    marginRight:25,

  },
  text1:{
    color:'#fff',
    margin:10,
  }
});
