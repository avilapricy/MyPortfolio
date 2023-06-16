import React from 'react';
import theme from "../../theme";
import Typography from "../Typography";
import { useMediaQuery } from '@chakra-ui/react'
import { ContainerItemList, Info, Image, ModalConteudo, ModalRodape, ImageModal, Modal } from "./style";


function ItemList({
    title = "",
    img = "",
    info = "",
    image = false,
    href = ""

}) {
    const [isMobile] = useMediaQuery('(max-width: 1000px)')

    return (
        <ContainerItemList ml='4' image={image}>
            <Info>
                <Typography bold={true} color={theme.colors.primary.primary6} variant="primary" type="subtitle2">{title}</Typography>
                <Typography color={theme.colors.secondary.secondary7} variant="primary" type="paragraphy1">{info}</Typography>
            </Info>
            {image && <a href={href} target="_blank"><Image src={img}/></a>}
        </ContainerItemList>
    )
}

export default ItemList;
