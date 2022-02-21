import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import logo from '../assets/images/logo1.png'
import { useNavigation } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import styled from 'styled-components';

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

      <CosButton>
        potato
      </CosButton>

      <TouchableOpacity
      >
        <Text style={styles.forgot_button}>Forget Password ?</Text>
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
    borderColor: '#f3e5d1',
    color: '#fefefe',
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
    backgroundColor: "#e95724",
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
  },
  loginText: {
    color: '#FEFEFE'
  }
})

const CosButton = styled.TouchableOpacity`

`