import React from "react";
import { View, Text, FlatList } from "react-native";

const produtos = [
    {
        id: "001",
        desc: "Mouse Gamer",
        price: 300,
    },
    {
        id: "002",
        desc: "HeadSet",
        price: 500,
    },
    {
        id: "003",
        desc: "Teclado",
        price: 300,
    }
]

export default function ListaPlana(){
    return <>
        <View>
            <FlatList 
            data = { produtos } 
            keyExtractor = { ( itemNumber ) => itemNumber.id } 
            renderItem = {  ( { item } )  => <Text> Seu produto é um { item.desc } de R${ item.price } </Text> } />  
        </View>
    </>
    //É passado como parametro para o render item um objeto complexo, por isso a necessidade de desestruturação. Usando as chaves
}

//const [{desc}] = produtos
