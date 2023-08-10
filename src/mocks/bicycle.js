import owner_image from "../../assets/owner.png"
import photo from "../../assets/bicicles/top.png"

import banco from "../../assets/mods/banco.png"
import guidao from "../../assets/mods/guidao.png"
import marcha from "../../assets/mods/marcha.png"
import roda from "../../assets/mods/roda.png"
import sino from "../../assets/mods/sino.png"

const bicycle = {
    top:{
        photo: photo,
        title: "Detalhes da Bicicleta"
    },
    infos:{
        name: "Biciclata Allied V3",
        owner: {
            owner_image: owner_image,
            owner_name: "Pedro Carvalho Pacheco",
        },
        description: "Uma bicicleta esportiva com alta performance para atletas profissionais",
        price: "R$5.000,00",
        button: "Comprar"
    },
    mods: {
        title: "Modificações da Bicicleta",
        list: [
            {
                name: "Banco",
                image: banco
            },
            {
                name: "Guidão",
                image: guidao
            },
            {
                name: "Marcha",
                image: marcha
            },
            {
                name: "Roda",
                image: roda
            },
            {
                name: "Sino",
                image: sino
            }
        ]
    }
}

export default bicycle