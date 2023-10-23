import React from "react";
import {
  StyledAdvantages,
  AdvantageTitle,
  AdvantagesList,
  AdvantageItem
} from "./styles.js";
import AdvantageCard from "../../ui/advantage-card/advantage-card";
import Button from "../../ui/button/button";

function Advantages({ advantages }) {
  return (
    <>
        <StyledAdvantages className="main-advantages">
          <AdvantageTitle children="Почему фермерские продукты лучше?" />
          {advantages?.length ? (
            <>
              <AdvantagesList>
                {advantages.map((advantage) => (
                  <AdvantageItem key={advantage.id}>
                    <AdvantageCard {...advantage} />
                  </AdvantageItem>
                ))}
              </AdvantagesList>
              <Button
                className="advantage-button"
                children="Купить"
                link="/buy/"
                minWidth={350}
              />
            </>
          ) : (
            <span>НИ ВЫШЛаУ Моковые данные где то потерялись</span>
          )}
        </StyledAdvantages>
    </>
  );
}

export default Advantages;
