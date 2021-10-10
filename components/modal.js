import React from "react";
import { View, Text, Modal } from 'react-native'

export default function() {
    return <View style = { { elevation: 10, height: 300, width: "90%" } } >
        <Modal animationType = {"slide"} transparent = { true }>
            <Text> Olá Mundo </Text>
        </Modal>
    </View>
    /* Modal cria uma especie de tela sobre tela, um div que sobressai as outras */ 
}