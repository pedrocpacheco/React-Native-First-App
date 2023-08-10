import React from "react";
import { StyleSheet, Image, Dimensions, Text } from "react-native"; 

import topo from "../../assets/topo.png"

const width = Dimensions.get("screen").width;

export default function Bicileta(){
    return <>
        <Image source={topo} style={estilos.topo} />
        <Text style={estilos.titulo}>Detalhes da Bicicleta</Text>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width - 10,
    },
    titulo:{
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
