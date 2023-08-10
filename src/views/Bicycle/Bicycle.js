import React from "react";
import { ScrollView, View, StyleSheet } from "react-native"; 
import Mods from "./components/Mods"

import Top from "./components/Top";
import Infos from "./components/Infos";

export default function Bicycle({ top, infos, mods }){
    return <ScrollView>
        <Top {...top}/>
        <View style={styles.infos}>
            <Infos {...infos}/>
            <Mods {...mods}/>
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    infos: {
        paddingVertical: 10,
        paddingHorizontal: 16
    },
})
