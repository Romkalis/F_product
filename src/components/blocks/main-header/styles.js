import styled from "styled-components";
import farmer from "../../../assets/farmer.svg";

export const StyledSection = styled.section`
  background-color: #d8ecfe;
  width: 100%;
  height: 600px;
  padding-left: 90px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  z-index: 5;
  max-width: 1280px;
  margin: auto;
  margin-bottom: 100px;


  &::after {
    z-index: 0;
    position: absolute;
    bottom: 0;
    right: 90px;
    content: "";
    display: block;
    width: 446px;
    height: 560px;
    padding-right: 90px;
    margin: auto;
    background-repeat: no-repeat;
    background-image: url('${farmer}');
  }
`;

export const Description = styled.div`
  padding: 0;
  margin: 0;
  width: 637px;
  z-index: 5;
`;

export const Text = styled.p`
  margin: 0;
  margin-top: 24px;
  padding: 0;
  color: {(props) => props.theme.colorTextDark};
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
`;
