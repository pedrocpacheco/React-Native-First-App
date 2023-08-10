import React from "react";
import { StyleSheet, Image, Dimensions, View } from "react-native"; 
import Top from "./components/Top";
import Infos from "./components/Infos";

export default function Bicileta(){
    return <>
    
    <Top />
    <View style={styles.infos}>
        <Infos />
    </View>
    </>
}

const styles = StyleSheet.create({
    infos: {
        paddingVertical: 10,
        paddingHorizontal: 16
    },
})