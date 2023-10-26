import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: space-between;
  background-color: ${(props) => props.color};
  
`;
