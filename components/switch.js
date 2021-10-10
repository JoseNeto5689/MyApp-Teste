import React, {useState} from 'react';
import { StyleSheet, Switch, View} from 'react-native';


export default function SwitchT() {
  const [ligado, setLigado] = useState(true)
  return <>
      <View style = { estilo.switch }>
        <Switch style = { estilo.switch }
        trackColor = {{ false: "#777", true: "#8bf" }}
        thumbColor = { ligado ? '#00f' : '#444' }
        value = { ligado }
        onValueChange = {
          () => {
            setLigado(previousState => !previousState)
          }
        }
        />
      </View>
  </>
}

const estilo = StyleSheet.create({
  switch: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

})