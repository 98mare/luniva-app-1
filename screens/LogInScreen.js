import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { useNavigation } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import styledComponentsNative from 'styled-components/native';

const LogInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const AuthLogin = () => {
    const dummy = {
      email: 'admin',
      password: 'admin'
    }
    if (email === dummy.email && password === dummy.password) {
      navigation.navigate('HomeScreen');
    } else (
      console.log('error please try again')
    )
  }
  return (
    <SafeAreaView style={styles.container} >
      <Image
        style={styles.image}
        source={logo}
      ></Image>
      {/* <Text style={styles.title}>Login</Text> */}

      <TextInput
        style={styles.TextInput}
        placeholder='Email.'
        onChangeText={(email) => setEmail(email)}
      ></TextInput>
      <TextInput
        style={styles.TextInput}
        placeholder='Password.'
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      ></TextInput>

      {/* <TouchableOpacity
        style={styles.loginBtn}
        onPress={AuthLogin}
      >
        <Text style={styles.loginText}>
          LOGIN
        </Text>
      </TouchableOpacity> */}
      <LoginButton
        onPress={AuthLogin}
      >
        <ButtonTxt>Login</ButtonTxt>
      </LoginButton>

      <TouchableOpacity
      >
        <Text style={styles.forgot_button}>Forgot Password ?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default LogInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefefe',
  },
  image: {
    marginBottom: 40,
    width: '75%',
    resizeMode: 'contain'
  },
  title: {
    color: '#e95724',
    fontSize: 30,
    textTransform: 'uppercase',
    marginBottom: 30,
  },

  TextInput: {
    borderWidth: 1,
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderColor: '#f1f1df',
    color: '#4c4747',
    borderRadius: 4,
  },
  forgot_button: {
    marginTop: 20,
    height: 30,
    marginBottom: 30,
    color: '#3c3c46'
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#e95724"
  },
  loginText: {
    color: '#FEFEFE'
  }
});

const LoginButton = styledComponentsNative.TouchableOpacity`
  background-color: red;
  padding: 14px;
  background-color: #e95724;
  width: 80%;
  align-items: center;
  border-radius: 50px;
  margin-top: 20px;
`
const ButtonTxt = styledComponentsNative.Text`
  color: #fefefe;
  font-size: 16px;
  text-transform: uppercase;
  
`