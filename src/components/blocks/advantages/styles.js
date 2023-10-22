import styled from "styled-components";
import Title from "../../ui/title/title";
import { Li, Ul } from "../../styled/index";

export const StyledAdvantages = styled.section`
  .main-advantages {
    display: flex;
    margin: auto;
    align-items: center;
    padding: 0 90px;
  }
  .advantage-button {
    margin: 0 auto;
    margin-top: 64px;
    margin-bottom: 100px;
  }
`;
export const AdvantageTitle = styled(Title)`
  text-align: center;
  margin-bottom: 64px;
`;

export const AdvantagesList = styled(Ul)`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  gap: 20px;
  justify-content: space-around;
  list-style: none;
  max-width: 1280px;
`;

export const AdvantageItem = styled(Li)`
  max-width: 500px;
`;
