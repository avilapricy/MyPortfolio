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
            height: 500px;
        }
`

export const Content = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: 120px;
    @media (max-width: 480px) {
        gap: 18px;
        flex-direction: column;
    }
`

export const Pri = styled.img`
    transition: transform .2s;
    object-fit: cover;
    border-radius: 155px;
    height: 347px;
    width: 296px;
    &:hover {
        transform: scale(1.3);
        transition: transform .6s;
    }
    @media (max-width: 480px) {
        width: 140px;
        height: 140px;

    }
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
        top: 81px;
        width: 483px;
    }
`

export const Info = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 26px;
    @media (max-width: 480px) {
        gap: 30px;
        width: 100%;
    }
`

export const Button = styled.button`
    cursor: pointer;
    &:hover {
        transform: scale(1.3);
        transition: transform .6s;
    }
`

export const IconGit = styled.img`
    width: 62px;
    cursor: pointer;
    &:hover {
        transform: scale(1.3);
        transition: transform .6s;
    }
    @media (max-width: 480px) {
        width: 32px;
    }

`

export const IconIn = styled.img`
    width: 70px;
    cursor: pointer;
    &:hover {
        transform: scale(1.3);
        transition: transform .6s;
    }
    @media (max-width: 480px) {
        width: 37px;
    }
`

export const ContentIcons = styled.div`
    display: flex;
    gap: 10px;
    @media (max-width: 480px) {
        margin: 40px 0;
        align-items: center;
        gap: 29px;
    }
`

export const Icons = styled.div`
        gap: 10px;
        display: flex;
    @media (max-width: 480px) {
        gap: 10px;
        display: flex;
        flex-direction: column;
    }
`

export const Tag = styled.a`
     z-index: 1;
`