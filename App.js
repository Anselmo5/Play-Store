import * as React from 'react';
import { Button, View, Text,StyleSheet,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AssetExample from './components/AssetExample';
import ProfileALte1 from './components/ProfileALte1.JS';
import Crianca from './components/Criancas';
import Eventos from './components/Eventos';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('PlayStore')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PlayStore" component={AssetExample} />
        <Stack.Screen name="EmAlta" component={ProfileALte1} />
        <Stack.Screen name="Crianças" component={Crianca} />
        <Stack.Screen name="Eventos" component={Eventos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
