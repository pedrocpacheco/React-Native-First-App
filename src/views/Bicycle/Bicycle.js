import React from "react";
import { ScrollView, View, StyleSheet, FlatList } from "react-native"; 
import Mod from "./components/Mod"

import Top from "./components/Top";
import Infos from "./components/Infos";

export default function Bicycle({ top, infos, mods }){
    return <>
        <FlatList
        data={mods.list}
        renderItem={Mod}
        keyExtractor={({ name }) => name}
        />
        <Top {...top}/>
        <View style={styles.infos}>
            <Infos {...infos}/>
        </View>
    </>
}

const styles = StyleSheet.create({
    infos: {
        paddingVertical: 10,
        paddingHorizontal: 16
    },
    listTitle: {
        color: "#464646",
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 32,
        marginTop: 32,
        marginBottom: 8
    }
})
