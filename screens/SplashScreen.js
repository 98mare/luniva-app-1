import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect } from 'react'
import logo from '../assets/images/logo1.png'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
  const navigation = useNavigation()
  useEffect(() => {
    setInterval(() => navigation.navigate("LoginScreen"), 5000)
  }, [])
  
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={logo}
      ></Image>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 200,
    resizeMode: 'contain'

  }
})