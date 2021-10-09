import React from 'react';
import { Text, StyleSheet, StatusBar, View, SafeAreaView, Image, Button, Alert} from 'react-native';
import C1 from './components/comp1';
import style from './styles/style';
import Texto from './components/comp2';
import Caixas from './components/comp3';
import icon from './assets/icon.png'

const exibir = condiction => {

}
const dobro = n => n*2
export default function App() {
  return <>
    <StatusBar/>

    <View><Button title = "Mostrar Mensagem" onPress = {() => Alert.alert("Minha primeira palestra")}/></View>
  </>
}







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

    /*if(!condiction){
    return <>
      <Text> Olá Mundo </Text>
      <Image style = { style.image } source = { require('./assets/splash.png') ou uri:"link"  icon }/>
    </>
  }
  return <Text> Hello World </Text>
}

export default function App() {
  return <>
      <StatusBar/>
      <SafeAreaView  style = {style.container}>
        { exibir(false) }
      </SafeAreaView>
  </>*/