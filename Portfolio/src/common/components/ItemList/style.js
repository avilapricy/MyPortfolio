import styled from "styled-components"

export const ContainerList = styled.div`
    background: ${props => {
        return props.theme.colors.primary.primary2;
    }};
    height: 400px;
    display: flex;
    padding: 100px;
    gap: 95px;
    overflow: hidden;
    @media (max-width: 480px) {
        gap: 30px;
        padding: 35px;
        height: 500px;
        display: flex;
        flex-direction: column;
        overflow: auto;
    }

`

export const ContainerResume = styled.div`
    background: ${props => {
        return props.theme.colors.primary.primary2;
    }};
    height: 400px;
    display: flex;
    padding: 100px 300px;
    gap: 95px;
    overflow: hidden;
    @media (max-width: 480px) {
        gap: 30px;
        padding: 35px;
        height: 500px;
        display: flex;
        flex-direction: column;
    }
`

export const ContainerItemList = styled.div`
    display: flex;
    gap: 20px;
    ${props =>
    props.image &&
    `
      flex-direction: column;
    `}
`

export const Image = styled.img`
    object-fit: cover;
    width:188px;
    height:188px;
    border-radius: 10px;
        
`

export const Info = styled.div`
    
`

export const ItemsResume = styled.div`
    display:'flex';
    gap: 30;
    align-items:'baseline';
    @media (max-width: 480px) {
        display:'flex';
        flex-direction: column;
    }
`