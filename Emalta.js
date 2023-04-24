import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput,Card, Linking } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      
      <Image style={styles.logo} source={require('../assets/d.jpg')} />
       <TextInput style={styles.input}
       placeholder="Pesquisar Apps e Jogos"
      />

      <View style={styles.textform}> 
        <Text style={styles.text1}> Para Voçê </Text>
         <Text style={styles.text2 }>  Em Alta </Text>
          <Text style={styles.text3}> Crianças</Text>
          <Text style={styles.text4}> Eventos </Text>
      </View>

      <View style={styles.form2} > 
        
      </View>


      <View style={styles.form3} > 
        
      </View>



      <View style={styles.form4} > 
        
      </View>

      <View style={styles.form5} > 
        
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    height: 50,
    width: 50,
    borderRadius:200,
    bottom:100,
    marginLeft:260,
  },
  input:{
    bottom:140,
    marginRight:90,
    width:240,
    height:40,
    backgroundColor:'#474747',
    padding:10,
    borderRadius:5,
    color:'#fff',
  },
  form2:{
     width:150,
    height:100,
    backgroundColor:'#fff8',
    bottom:50,
    marginLeft:150,
  },
  form3:{
     width:150,
    height:100,
    backgroundColor:'#fff8',
    bottom:150,
    marginRight:190,
  },
  form4:{
     width:150,
    height:100,
    backgroundColor:'#fff8',
    bottom:70,
    marginLeft:150,
  },
  form5:{
     width:150,
    height:100,
    backgroundColor:'#fff8',
    bottom:170,
    marginRight:190,
  },
  textform:{
    bottom:120,
    width:350,
    borderRadius:8,
    displat:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    marginRight:13,
  },
  text1:{
    color:'#fff',
    margin:10,
  },

  text2:{
    color:'#fff',
    margin:10,
  },

    text3:{
    color:'#fff',
    margin:10,
  },
   text4:{
    color:'#fff',
    margin:10,
  },

});
