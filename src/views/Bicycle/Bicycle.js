import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native"; 
import TextStyled from "./components/TextStyled";

import top from "../../assets/bicicles/top.png"
import owner_image from "../../assets/owner.png"

const width = Dimensions.get("screen").width;

export default function Bicileta(){
    return <>
        <Image source={top} style={styles.top} />
        <TextStyled style={styles.title}>Detalhes da Bicicleta</TextStyled>
        <View style={styles.infos}>
            <TextStyled style={styles.name}>Bicicleta Allied</TextStyled>
            <View style={styles.owner}>
                <Image source={owner_image} style={styles.owner_image}></Image>
                <TextStyled style={styles.owner_name}>Pedro Carvalho Pacheco</TextStyled>
            </View>
            <TextStyled style={styles.description}>
                Uma bicicleta esportiva com alta 
                performance par a atletas profissionais.
            </TextStyled>
            <TextStyled style={styles.price}>R$5.000,00</TextStyled>
        </View>
    </>
}

const styles = StyleSheet.create({
    top: {
        width: "100%",
        height: 578 / 768 * width - 10,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
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
        paddingVertical: 10,
        paddingHorizontal: 16
    },
    name: {
        color: "#464646",
        fontSize: 26, 
        lineHeight: 42,
        fontWeight: "bold"
    },
    owner:{
        flexDirection: "row",
        paddingVertical: 10,
        alignItems: "center"
    },
    owner_image:{
        width: 45,
        height: 45,
        borderRadius: 15
    },
    owner_name:{
        fontSize: 18,
        lineHeight: 26,
        marginLeft: 12,
        fontWeight: "bold"
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
