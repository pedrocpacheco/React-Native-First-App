import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native"; 

import top from "../../assets/bicicles/top.png"

const width = Dimensions.get("screen").width;

export default function Bicileta(){
    return <>
        <Image source={top} style={styles.top} />
        <Text style={styles.title}>Detalhes da Bicicleta</Text>
        <View>
            <Text style={styles.name}>Bicicleta Allied</Text>
            <Text style={styles.owner_name}>Pedro Carvalho Pacheco</Text>
            <Text style={styles.description}>
                Uma bicicleta esportiva com alta 
                performance para atletas profissionais
            </Text>
            <Text style={styles.price}>R$5.000,00</Text>
        </View>
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
    },
    infos: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    name: {
        color: "#464646",
        fontSize: 26, 
        lineHeight: 42,
        fontWeight: "bold"
    },
   owner_name:{
    fontSize: 16,
    lineHeight: 26
   },
   description: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26
   },
   price: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 6
   }
});
