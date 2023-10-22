import styled from "styled-components";
import { TitleSize } from "./title";

export const StyledTitle = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-size: 36px;
  font-weight: 700;
  line-height: 115%; /* 50.6px */
  margin: 0;
  padding: 0;
  font-size: ${(props) => {
    let fontSize = "36px";
    if (props.size === TitleSize.BIG) {
      fontSize = "44px";
    }
    if (props.size === TitleSize.SMALL) {
      fontSize = "28px";
    }
    return fontSize;
  }}};

  /* .title__big {
  font-size: 44px;
}

.title__small {
  font-size: 24px;
  line-height: 130%;
} */
`;
