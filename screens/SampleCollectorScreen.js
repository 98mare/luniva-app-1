import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import styledComponents from 'styled-components'
import { useNavigation } from '@react-navigation/native'

const SampleCollectorScreen = () => {
  const navigation = useNavigation();
  return (
    <SampleCollectContainer>
      <Text>SampleCollectorScreen</Text>
      <CTextInput placeholder='name'></CTextInput>
      <CTextInput placeholder='Address'></CTextInput>
      <CTextInput placeholder='age'></CTextInput>
      <CTextInput placeholder='Phone number'></CTextInput>
      <CTextInput placeholder='Sample no'></CTextInput>
      <CTextInput placeholder='sample name'></CTextInput>
      <Button title='submit' onPress={() => navigation.navigate('SignatureCanvas')}></Button>
    </SampleCollectContainer>
  )
}

export default SampleCollectorScreen

const styles = StyleSheet.create({})

const SampleCollectContainer = styledComponents.View`
  flex: 1;
  align-items: center;
  padding: 100px 10px 10px 10px;
`

const CTextInput = styledComponents.TextInput`
  width: 100%;
  border: 1px solid #f3ead3ec;
  margin-bottom: 20px;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 1px 20px 20px #cc7070;
`