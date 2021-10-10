import React from "react";
import { ScrollView } from "react-native";

export default function({ children }) {
    return <>
    <ScrollView>
       { children }
    </ScrollView>
        </>
}