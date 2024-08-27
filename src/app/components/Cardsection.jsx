import React from "react";
import Card from "./Card";
import { cardInfo } from "../../utils/index";

const CardSection = () => {
  return (
    <div className="bg-background">
      <section id="about" className="pb-20 max-w-screen-xl mx-auto">
      <h2 className="text-4xl text-secondary max-w-[30ch] mx-auto font-bold text-center pb-10">
        Transformando Recursos Humanos: Talento, Inclusión y Comunidad
      </h2>
      <div className="flex flex-wrap gap-5 px-5">
        {cardInfo.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            img={card.img}
            paragraph={card.paragraph}
          />
        ))}
      </div>
    </section>
    </div>
  );
};

export default CardSection;
