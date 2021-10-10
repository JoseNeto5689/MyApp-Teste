import React, {useState} from 'react';
import {StatusBar, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import ListaPlana from './components/ListaPlana';

export default function() {
  const [nome, setNome ] = useState("")
  return <>
      <TextInput style = { { borderWidth: 1, borderColor: "black" , height: 50, width: "auto"} } 
      onChangeText = { texto => setNome(texto) }
      multiline = { true }
      />
      <Text> { nome } </Text>
  </>
}

const estilo = StyleSheet.create({
  switch: {
  },
  conatiner: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  }
})