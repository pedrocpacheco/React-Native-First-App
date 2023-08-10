import { View, Image } from "react-native"
import TextStyled from "../../../components/TextStyled"

export default function Itens({ title, list }){
    return <>
        <TextStyled>{title}</TextStyled>
        { list.map(({name, image}) => {
            return <View key={name}>
                <TextStyled>{name}</TextStyled>
                <Image source={image}></Image>
                </View>
        }) }
    </>
}