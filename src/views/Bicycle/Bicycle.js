import React from "react";
import { View, StyleSheet, FlatList } from "react-native"; 
import Mod from "./components/Mod"

import Top from "./components/Top";
import Infos from "./components/Infos";

import TextStyled from "../../components/TextStyled";

export default function Bicycle({ top, infos, mods }){
    return <>
        <FlatList
        data={mods.list}
        renderItem={Mod}
        keyExtractor={({ name }) => name}
        ListHeaderComponent={() => {
            return <>
                <Top {...top}/>
                <View style={styles.infos}>
                    <Infos {...infos}/>
                    <TextStyled style={styles.listTitle}>{ mods.title }</TextStyled>
                </View>
            </>
        }}
        />
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
        marginBottom: 8,
    }
})
