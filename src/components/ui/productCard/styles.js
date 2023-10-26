import styled from "styled-components";

export const CardList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin: 0;
    padding: 0;
    gap: 12px;
`

export const StyledCard = styled.li`
display: flex;
max-width: 727px;
gap: 20px;
border: 1px solid rgba(0, 0, 0, 0.10);
background: #FFF;
padding: 20px
`

export const Image = styled.img`
    width: 248px;
    height: 248px;
    object-fit: cover;
`

export const CardDescription = styled.p`
    text-align: left;
`

export const ProductsEmpty = styled.div`
display: flex;
height: 50%;
margin: 5em;
justify-content: center;
align-items: center;
border: 5px solid tomato;
border-radius: 2em;
`

export const Alert = styled.p`
color: #333;

/* Body 14px / Regular */
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 21px */
`
