import React, {useState} from 'react';
import {StatusBar, StyleSheet, SafeAreaView, Text, View, Button} from 'react-native';
import Modal from './components/modal';
import Sc from './components/rolagem';
import Box from "./components/boxes"
import TP from './components/testParam';
import { NavigationContainer } from './node_modules/@react-navigation/native';
import { createDrawerNavigator } from './node_modules/@react-navigation/drawer'; 
import { mock } from './components/mocks';

const Guias = createDrawerNavigator()

function TelaHome( { navigation } ){
  //navigation.setOptions({ title: "Tela de Home" })
  return <>
    <View style = { { flex: 1, alignItems: "center", justifyContent: "center", } } >
      <Text>{ mock.titulo.pag01 }</Text>
      <Text> IFPB </Text>
    </View>
  </>
}

function TelaCanal( { navigation } ){
  return <>
    <View style = { { flex: 1, alignItems: "center", justifyContent: "center", } } >
      <Text>Canal Screen</Text>
      <Text> ifpb Campus Sousa </Text>
    </View>
  </>
}

function TelaPalestra( { navigation } ){
  return <>
    <View style = { { flex: 1, alignItems: "center", justifyContent: "center", } } >
      <Text> Lets Go</Text>
      <Text> Hora de apresentar </Text>
    </View>
  </>
}

export default function App() {
  return <>
        <StatusBar barStyle = "light-content" />
        <NavigationContainer>
          <Guias.Navigator initialRouteName = "Home" >
            <Guias.Screen
            name = "Home"
            component = { TelaHome }
            options = { ( { navigation } ) => ({ title: "Tela Inicial", headerStyle: { backgroundColor: "blue" }, headerTintColor: "white", headerRight: () => <View style = { { marginRight: 15 } } ><Button title = "Canal" color = "gray" onPress = { () => navigation.navigate("Canal") } /></View> }) }/>
            <Guias.Screen 
            name = "Canal"
            component = { TelaCanal }
            options = { { title: "Tela do Canal" } }
            />
            <Guias.Screen
            name = "Palestra"
            component = { TelaPalestra }
            options = { { title: "Tela da Palestra" } }
            />
          </Guias.Navigator>
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