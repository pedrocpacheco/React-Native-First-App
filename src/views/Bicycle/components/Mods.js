import { View, Image, StyleSheet } from "react-native"
import TextStyled from "../../../components/TextStyled"

export default function Itens({ title, list }){
    let contador = 0
    list.forEach(item => {
        contador++
    });
    return <>
        <TextStyled style={styles.title}>{title} | Total: {contador}</TextStyled>
        { list.map(({name, image}) => {
            return <View key={name} style={styles.item}>
                <Image source={image} style={styles.image}></Image>
                <TextStyled style={styles.name}>{name}</TextStyled>
                </View>
        }) }
    </>
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
    title: {
        color: "#464646",
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 32,
        marginTop: 32,
        marginBottom: 8
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