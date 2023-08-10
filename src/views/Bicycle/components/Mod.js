import { View, Image, StyleSheet } from "react-native"
import TextStyled from "../../../components/TextStyled"

export default function Itens({item: { name, image }}){
    return <View key={name} style={styles.item}>
    <Image source={image} style={styles.image}></Image>
    <TextStyled style={styles.name}>{name}</TextStyled>
    </View>
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        paddingVertical: 16,
        alignItems: "center",
        gap: 70
    },
    image: {
        width: 80 ,
        height: 80 
    },
    name: {
        fontSize: 16,
        lineHeight: 26,
        color: "#464646"
    }
});