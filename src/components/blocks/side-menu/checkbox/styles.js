import styled from "styled-components";
import check from '../../../../assets/check.svg'

export const VisuallyHiddenInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0); 
  overflow: hidden;

  &:focus-visible ~ * {
    outline: 1px solid #000000;
  }

  &:checked + span{
    border: 1px solid rgba(0, 0, 0, 0.10);
  background: #FC9B27;
  background-image: url(${check});
  background-size: 16px;
  background-repeat: no-repeat;
  background-position: center;
  } 

`;

export default VisuallyHiddenInput;

export const StyledCheckbox = styled.span`
  width: 1.5em;
  height: 1.5em;
  border: 1px solid rgba(0, 0, 0, 0.10);
  background: #f6f6f6;
  transition: all 0.5s ease;

  &:active,
  &:hover{
  border: 1px solid rgba(0, 0, 0, 0.10);
  background: #FC9B27;


  }
`

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
`

export const CheckboxName = styled.span`
color: #333;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 27px */
`