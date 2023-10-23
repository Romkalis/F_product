import styled from "styled-components";

export const StyledFooter = styled.footer`
  border-top: 1px solid #0000001a;
  padding: 18px 0;
`;

export const FooterWrapper = styled.div`
  width: ${(props) => props.theme.pageWidth};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;
