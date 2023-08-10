import { Image, StyleSheet, Dimensions } from "react-native"

import TextStyled from "../../../components/TextStyled"

const width = Dimensions.get("screen").width;

export default function Top({ photo, title }){
    return <>
        <Image source={photo} style={styles.photo} />
        <TextStyled style={styles.title}>{title}</TextStyled>
    </>
}

const styles = StyleSheet.create({
    photo: {
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
