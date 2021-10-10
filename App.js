import React, {useState} from 'react';
import {StatusBar, StyleSheet, SafeAreaView, Text, View, Button} from 'react-native';
import Modal from './components/modal';
import Sc from './components/rolagem';
import Box from "./components/boxes"
import TP from './components/testParam';
import { NavigationContainer } from './node_modules/@react-navigation/native';
import { createStackNavigator } from './node_modules/@react-navigation/stack';

const Pilha = createStackNavigator()

function TelaHome( { navigation } ){
  return <>
    <View style = { { flex: 1, alignItems: "center", justifyContent: "center", } } >
      <Text>Home Screen</Text>
      <Text> IFPB </Text>
      <Button title = "Tela Canal" onPress = { () => navigation.navigate("Canal")  } />
      <Button title = "Tela de Testes" onPress = { () => navigation.navigate("Teste")  } />
    </View>
  </>
}
function TelaTestParam( { navigation } ){
  return <TP navigation = { navigation } ora = { "Olá Mundo" } />
}

function TelaCanal( { navigation } ){
  return <>
    <View style = { { flex: 1, alignItems: "center", justifyContent: "center", } } >
      <Text>Canal Screen</Text>
      <Text> ifpb Campus Sousa </Text>
      <Button title = "Ir para tela de palestras" onPress = { () => navigation.navigate("Palestra", { nome: "José", curso: "Informática" })  } />
    </View>
  </>
}

function TelaPalestra( { navigation, route } ){
  return <>
    <View style = { { flex: 1, alignItems: "center", justifyContent: "center", } } >
      <Text>{ route.params.nome }</Text>
      <Text> { route.params.curso } </Text>
      <Button title = "Tela Canal" onPress = { () => navigation.goBack()  } />
    </View>
  </>
}

export default function App() {
  return <>
        <NavigationContainer>
          <Pilha.Navigator initialRouteName = "Home" >
            <Pilha.Screen
            name = "Home"
            component = { TelaHome }
            options = { { title: "Tela Inicial" } }
            />
            <Pilha.Screen
            name = "Canal"
            component = { TelaCanal }
            options = { { title: "Tela do Canal" } }
            />
            <Pilha.Screen
            name = "Palestra"
            component = { TelaPalestra }
            options = { { title: "Tela da Palestra" } }
            />
            <Pilha.Screen
            name = "Teste"
            component = { TelaTestParam }
            options = {{ title: "Tela de Testes" }}
            />
          </Pilha.Navigator>
        </NavigationContainer>
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