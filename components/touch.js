import React, { useState } from "react";
import { TouchableHighlight, View, StyleSheet, Alert, Text } from "react-native";

export default function() {
    const [count, setNumber] = useState(0)
    const contar = num => {
        if(count <= 0 && num === -1){
            setNumber(0)
            num = 0
        }
        setNumber(count+num)
    }
    return <View>
        <View style = { { flexDirection: "row" } } >
        <TouchableHighlight underlayColor = { null } onPress = { () => contar(1) } disabled = { false }>
            <View style = { style.box }>
            </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor = { null } onPress = { () => contar(-1) } disabled = { false }>
            <View style = { style.box2 }>
            </View>
        </TouchableHighlight>
        </View>
        <Text style = { { textAlign: "center" } } > { count } </Text>
    </View>
}

const style = StyleSheet.create( {
    box: {
        height: 50,
        width: 50,
        borderColor: "black",
        borderWidth: 2,
        backgroundColor: "green",
        borderRadius: 50,
        marginHorizontal: 5,
    },
    box2: {
        height: 50,
        width: 50,
        borderColor: "black",
        borderWidth: 2,
        backgroundColor: "red",
        borderRadius: 50,
        marginHorizontal: 5,
    }
} )