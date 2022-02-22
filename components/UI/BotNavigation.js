import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import LogInScreen from '../../screens/LogInScreen';

const BotNavigation = () => {
  const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab name='HomeScreen' component={HomeScreen}/>
        <Tab name='LogInScreen' component={LogInScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BotNavigation

const styles = StyleSheet.create({})