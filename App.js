import React, {useState} from 'react';
import {StatusBar, StyleSheet, SafeAreaView, Text} from 'react-native';


export default function App() {
  return <>
    <StatusBar/>
    <SafeAreaView style={ estilo.conatiner }>
      <Text>IFPB Campus Sousa</Text>
      <Text>Palestra de React Native</Text>
    </SafeAreaView>
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