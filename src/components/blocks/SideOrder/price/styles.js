import styled from "styled-components";

export const PriceTitle = styled.p`
color: #333;
/* Body 14px / Regular */
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 150%;
margin-bottom: 0.5em;
margin-top: 20px;

`

export const StyledPrice = styled.p`
margin-top: 0;
margin-bottom: 2em;
padding: 0;
color: ${(props) => props.theme.colorTextDark};
/* text-align: center; */
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 130%; /* 31.2px */
`

