import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
/* @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"); 
дело в том что styled-components плохо работает с подключением шрифтов через имполрт, поэтому
рекомендуется подключать шрифты через линк в HTML    */

html {
  height: 100%;
}

body,
html {
  margin: 0;
  padding: 0;
}

body {
  position: relative;
  min-height: 100%;
  font-family: ${(props) => props.theme.fontFamily}
  font-size: ${(props) => props.theme.fontSizeDefault};
  color: ${(props) => props.theme.colorTextDark};

  line-height: 27px;
  font-weight: 400;
  margin: auto;
  box-sizing: border-box;
}
`;
