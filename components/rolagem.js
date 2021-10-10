import React, {useState} from "react";
import { ScrollView, RefreshControl } from "react-native";

export default function({ children }) {
    const [refresh, setRefresh] = useState(false)

    function refreshing(){
        setRefresh(true)
        //Aqui ficaria a rotina de atualização dos componentes
        setTimeout(() => setRefresh(false) ,3000)
    }
    return <>
    <ScrollView refreshControl = {
        <RefreshControl
        refreshing = { refresh }
        onRefresh = { refreshing }
         />
    }>
       { children }
    </ScrollView>
        </>
}