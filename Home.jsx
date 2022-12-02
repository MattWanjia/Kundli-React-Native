import React, {useEffect} from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function Home({navigation}) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  useEffect(() => {
    setTimeout(() => {
      //console.log("Timer")
      navigation.navigate("Kundli by Martin Wanjia")
    }, 1000)
  }, [])

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/splash.jpg')} style={{width: '100%', height: '100%'}}></ImageBackground>
    </View>
  )
}
