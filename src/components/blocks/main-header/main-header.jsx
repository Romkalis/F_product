import React from "react";
import { StyledSection, Description, Text } from "./styles.js";
import Title, { TitleSize } from "/src/components/ui/title/title";

function MainHeader() {
  return (
    <StyledSection>
      <Description>
        <Title size={TitleSize.BIG}>
          Магазин фермерских продуктов с доставкой
        </Title>
        <Text>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </Text>
      </Description>
    </StyledSection>
  );
}

export default MainHeader;
