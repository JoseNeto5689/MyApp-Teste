import React from "react";
import { Text } from "react-native";

export default function Texto( { children } ){
    return <Text style = { { color: "blue" } } > { children } </Text>
}