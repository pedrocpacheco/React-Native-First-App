import React from "react";
import { StyleSheet, Image, Dimensions, Text } from "react-native"; 

import top from "../../assets/top.png"

const width = Dimensions.get("screen").width;

export default function Bicileta(){
    return <>
        <Image source={top} style={styles.top} />
        <Text style={styles.title}>Detalhes da Bicicleta</Text>
    </>
}

const styles = StyleSheet.create({
    top: {
        width: "100%",
        height: 578 / 768 * width - 10,
    },
    title:{
        width: "100%",
        position: "absolute",
        textAlign: "center",    
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 10,
        textShadowColor: "black",
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 6
    }
})
