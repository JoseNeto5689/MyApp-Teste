import React from "react";
import { Button, View, Alert } from "react-native";

const alerta = function(){
    Alert.alert("Minha palestra")
}

export default function Botao() {
    return <View><Button title = "Mostrar Mensagem" onPress = { alerta }/></View>
}