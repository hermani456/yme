import React from "react";
import Card from "./Card";
import { cardInfo } from "../../utils/index";

const CardSection = () => {
  return (
    <section id="mision" className="bg-background pt-5">
      <h2 className="text-4xl text-secondary max-w-[30ch] mx-auto font-bold text-center mb-5">
        Transformando Recursos Humanos: Talento, Inclusión y Comunidad
      </h2>
      <div className="max-w-screen-xl mx-auto min-h-[60vh] grida p-5">
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
  );
};

export default CardSection;
