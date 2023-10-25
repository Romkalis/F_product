import styled from "styled-components";
import Title from '../../ui/title/title'
import Button from '../../ui/button/button'

export const OrderBlock = styled.div`
max-width: 353px;
background-color: #fff;
padding: 24px 20px;
border: 1px solid rgba(0, 0, 0, 0.10);
box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04), 0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
`

export const OrderTitle = styled(Title)`
  color: #333;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 27px */
margin-bottom: 1.5em;
`
export const StyledInput = styled.input`
box-sizing: border-box;
display: flex;
padding: 14px 13px;
align-items: center;
border: 1px solid rgba(0, 0, 0, 0.10);
background: #F6F6F6;
min-width: 100%;
margin-bottom: 1.5em;
`

export const OrderButton = styled(Button)`
min-width: 100%;

&:disabled {
  background-color: #f6f6f6;
}
`