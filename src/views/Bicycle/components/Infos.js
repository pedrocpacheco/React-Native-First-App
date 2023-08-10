import { StyleSheet, Button } from "react-native"
import TextStyled from "../../../components/TextStyled"
import Owner from "./Owner"

export default function Infos({ name, owner, description, price, button}){
    return <>
        <TextStyled style={styles.name}>{name}</TextStyled>
        <Owner {...owner}/>
        <TextStyled style={styles.description}>{description}</TextStyled>
        <TextStyled style={styles.price}>{price}</TextStyled>
        <Button title={button}/>
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

