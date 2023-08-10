import { View, Image, StyleSheet } from "react-native"
import TextStyled from "../../../components/TextStyled"

import owner_image from "../../../../assets/owner.png"

export default function Owner(){
    return <>
        <View style={styles.owner}>
            <Image source={owner_image} style={styles.owner_image}></Image>
            <TextStyled style={styles.owner_name}>Pedro Carvalho Pacheco</TextStyled>
        </View>
    </>
}

const styles = StyleSheet.create({
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
})