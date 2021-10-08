import React from 'react';
import { Text, StyleSheet, StatusBar, View } from 'react-native';
import C1 from './components/comp1';
//import style from './styles/style';
import Texto from './components/comp2';

export default function App() {
  return <>
  <StatusBar/>
  <View  style = {style.container}>
  <View style = { style.container1 } ></View>
  <View style = { style.container2 }></View>
  <View style = { style.container3 }></View>
  <View style = { style.container4 }></View>
  </View>
  </>
}

const style = StyleSheet.create({

  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "gray",
    height: "80%"

  },

  container1: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    margin: 5,
    borderColor: "black",
    borderWidth: 3,
  },
  container2: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    margin: 5,
    borderColor: "black",
    borderWidth: 3,
  },
  container3: {
    width: 100,
    height: 100,
    backgroundColor: "green",
    margin: 5,
    borderColor: "black",
    borderWidth: 3,
  },
  container4: {
    width: 100,
    height: 100,
    backgroundColor: "yellow",
    margin: 5,
    borderColor: "black",
    borderWidth: 3,
  }
})





/*
<>
    <StatusBar/>
    <View style= {style.container} >
      <Text style = {style.text, { color: "blue" }}>Olá Mundo</Text>
      <C1 number = "Olá" color = "blue"/>
      <C1 number = "Oi" color = "red"/>
      <C1 number = "Hello" color = "green"/>
      <C1 number = "Hi" color = "black"/>
      <Text style = {style.textBase} > Hoho </Text>
      <Texto>Olá Mundo</Texto>
    </View>
  </>

  */