
import { Text, StyleSheet } from "react-native"

export default function TextStyled({ children, style }){
    let styleType = styles.text;
    
    if (style?.fontWeight === "bold") { styleType = styles.textBold; }
    return <Text style={[style,styleType]}>{ children }</Text>
}

const styles = StyleSheet.create({
    text: {
        fontWeight: "normal",
        fontFamily: "MontserratRegular"
    },
    textBold: {
        fontWeight: "normal",
        fontFamily: "MontserratBold"
    }
});