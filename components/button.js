import React, { useState } from "react";
import { Button, Text } from "react-native";

export default function (){
    const [ligado, setLigado] = useState(false)
    return <>
    <Button title = { ligado?"Desligar":"Ligar"} onPress = {() => setLigado(!ligado)} />
    {ligado?
    <Text style = { estilo.text } > Ligado </Text>
    : 
    <Text style = {estilo.text} > Desligado </Text>
    }
    </>
}