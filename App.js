import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home'
import DataEntry from './DataEntry';

export default function App() {
  

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {/*<View style={styles.container}>
        <ImageBackground source={require('./assets/splash.jpg')} style={{width: '100%', height: '100%'}}></ImageBackground>
  </View>*/}
      <Stack.Navigator>
        <Stack.Screen name='Splash' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='Kundli by Martin Wanjia' component={DataEntry} options={{headerShown: true, headerStyle:{backgroundColor:'#e34309'}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
