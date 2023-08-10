
import { Text, StyleSheet } from "react-native"

export default function TextStyled({ children, style }){
    let fontStyle = fontStyles.text;
    
    if (style?.fontWeight === "bold") { 
        fontStyle = fontStyles.textBold; 
    }
    
    return <Text style={[style,fontStyle]}>{ children }</Text>
}

const fontStyles = StyleSheet.create({
    text: {
        fontWeight: "normal",
        fontFamily: "MontserratRegular"
    },
    textBold: {
        fontWeight: "normal",
        fontFamily: "MontserratBold"
    }
});

