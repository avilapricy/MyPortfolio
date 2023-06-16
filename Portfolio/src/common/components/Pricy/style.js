import styled from "styled-components"

export const ContainerPricy = styled.div`
    background: ${props => {
        return props.theme.colors.primary.primary2;
    }};
        display: flex;
        flex-direction: row-reverse;    
        justify-content: start;
        height: 400px;
        padding: 16px;
        position: relative;
        overflow: hidden;
        @media (max-width: 480px){
            height: 170px;
        }
`

export const Content = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: 120px;
    @media (max-width: 480px) {
        gap: 18px;
    }
`

export const Pri = styled.img`
    trasition: transform .2s;
    object-fit: cover;
    border-radius: 155px;
    height: 347px;
    width: 296px;
    &:hover {
        transform: scale(1.3);
        trasition: transform .6s;
    }
    @media (max-width: 480px) {
        width: 202px;
        height: 140px;
        
    }
    // @media (hover: hover) {
    //     transform: scale(1.3);
    //     trasition: transform .10s;
    // }
`

export const Folha = styled.img`
    display: flex;
    justify-content: flex-end;
    position: absolute;
    transform: rotate(-126deg);
    bottom: 0;
    opacity: 0.2;
    right: -158px;
    top: 11px;
    width: 552px;
    height: 439px;
    @media (max-width: 480px) {
        transform: rotate(-135deg);
        top: -97px;
        width: 483px;
    }
`   

export const Info = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    align-itens: end;
    gap: 26px;
    @media (max-width: 480px) {
        gap: 9px;
    }
`

export const Button = styled.button`
    cursor: pointer;
    &:hover {
        transform: scale(1.3);
        trasition: transform .6s;
    }
`

export const Icon = styled.img`
    width: 62px;
    
`

export const IconIn = styled.img`
    width: 70px;
`

export const ContentIcons = styled.div`
    display: flex;
    gap: 10px;
`