import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LogInScreen from './screens/LogInScreen';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraSCreen from './screens/CameraSCreen';
import SampleCollectorScreen from './screens/SampleCollectorScreen';
import SignatureCanvas from './screens/SignatureCanvas';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator()
  return (

    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          {/* <Stack.Screen
            name='SplashScreen'
            component={SplashScreen}
            options={{
              headerShown: false,
            }}
          >
          </Stack.Screen> */}
          {/* <Stack.Screen
            name='LoginScreen'
            component={LogInScreen}
            options={{
              headerShown: false,
            }}
          >
          </Stack.Screen> */}
          {/* <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
          
            options={{
              headerShown: false,
            }}
          ></Stack.Screen> */}
          <Stack.Screen
            name='SampleCollectorScreen'
            component={SampleCollectorScreen}
          
            options={{
              headerShown: false,
            }}
          ></Stack.Screen>
          <Stack.Screen
            name='SignatureCanvas'
            component={SignatureCanvas}
          
            options={{
              headerShown: false,
            }}
          ></Stack.Screen>
           {/* <Stack.Screen
            name='CameraSCreen'
            component={CameraSCreen}
          
            options={{
              headerShown: false,
            }}
          ></Stack.Screen> */}
        </Stack.Navigator>
        
        
      </SafeAreaProvider>
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
