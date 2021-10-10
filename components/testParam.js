import React from "react"
import { Text, View, Button } from "react-native"


export default function ( { navigation, ora } ){
    return <>
      <View style = { { flex: 1, alignItems: "center", justifyContent: "center", } } >
        <Text>{ ora }</Text>
        <Button title = "Tela Principal" onPress = { () => navigation.navigate("Home")  } />
      </View>
    </>
  }