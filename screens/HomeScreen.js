import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Buttons from '../components/UI/Buttons'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Buttons></Buttons>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})