import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import "./style.css";

function AdvantageCard(advantage) {
  return (
    <article className="advantage">
      <header className="advantage-header">
        <img
          className="advantage-img"
          src={advantage.image}
          alt="изображение продуктов"
        />
        <div>
          <span className={advantage.feature}>{advantage.owner}</span>
          <Title children={advantage.title} level={2} size={TitleSize.SMALL} />
        </div>
      </header>

      <p className="advantage-description">{advantage.about}</p>
    </article>
  );
}

export default AdvantageCard;
