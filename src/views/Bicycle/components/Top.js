import { Image, StyleSheet, Dimensions } from "react-native"
import TextStyled from "../../../components/TextStyled"

import top from "../../../../assets/bicicles/top.png"

const width = Dimensions.get("screen").width;

export default function Top(){
    return <>
        <Image source={top} style={styles.top} />
        <TextStyled style={styles.title}>Detalhes da Bicicleta</TextStyled>
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
    }
})