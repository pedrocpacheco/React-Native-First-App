import React from "react";
import { View, StyleSheet } from "react-native"; 
import Mods from "./components/Mods"

import Top from "./components/Top";
import Infos from "./components/Infos";

export default function Bicycle({ top, infos, mods }){
    return <>
        <Top {...top}/>
        <View style={styles.infos}>
            <Infos {...infos}/>
            <Mods {...mods}/>
        </View>
    </>
}

const styles = StyleSheet.create({
    infos: {
        paddingVertical: 10,
        paddingHorizontal: 16
    },
})
