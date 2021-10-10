import React from "react";
import { Text } from "react-native";
import style from "../styles/style";

export default function ( props ){
    let cor = props.color
    return <Text style = {style.textBase, {color: cor}}> {props.number} Hello my world </Text>
}