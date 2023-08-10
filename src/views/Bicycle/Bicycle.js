import React from "react";
import { StyleSheet, Image, Dimensions, View } from "react-native"; 
import TextStyled from "../../components/TextStyled"
import Top from "./components/Top";

import owner_image from "../../../assets/owner.png"

export default function Bicileta(){
    return <>
        <Top />
        <View style={styles.infos}>
            <TextStyled style={styles.name}>Biciclata Allied</TextStyled>
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
