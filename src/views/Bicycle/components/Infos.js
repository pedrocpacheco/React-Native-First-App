import { View, StyleSheet } from "react-native-web"
import TextStyled from "../../../components/TextStyled"
import Owner from "./Owner"

export default function Infos(){
    return <>
        <TextStyled style={styles.name}>Biciclata Allied</TextStyled>
        <Owner />
        <TextStyled style={styles.description}>
            Uma bicicleta esportiva com alta 
            performance par a atletas profissionais.
        </TextStyled>
        <TextStyled style={styles.price}>R$5.000,00</TextStyled>
    </>
}

const styles = StyleSheet.create({
    name: {
        color: "#464646",
        fontSize: 26, 
        lineHeight: 42,
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
})