import React from 'react';
import { Text, StyleSheet, StatusBar, View } from 'react-native';
import C1 from './components/comp1';
import style from './styles/style';
import Texto from './components/comp2';

export default function App() {
  return <>
    <StatusBar/>
    <View style= {style.container} >
      <Text style = {style.text/*, { color: "blue" }*/}>Olá Mundo</Text>
      <C1 number = "Olá" color = "blue"/>
      <C1 number = "Oi" color = "red"/>
      <C1 number = "Hello" color = "green"/>
      <C1 number = "Hi" color = "black"/>
      <Text style = {style.textBase} > Hoho </Text>
      <Texto>Olá Mundo</Texto>
    </View>
  </>
}

