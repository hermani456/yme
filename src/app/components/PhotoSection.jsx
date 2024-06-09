import React from "react";
import Carousel from "./Carousel";
import photo1 from "../../../public/assets/img/photos/1.jpg";
import photo2 from "../../../public/assets/img/photos/2.jpg";
import photo4 from "../../../public/assets/img/photos/4.jpg";
import photo6 from "../../../public/assets/img/photos/6.jpg";
import photo7 from "../../../public/assets/img/photos/7.jpg";
import photo8 from "../../../public/assets/img/photos/8.jpg";
import photo10 from "../../../public/assets/img/photos/10.jpg";

const PhotoSection = () => {
  const images = [photo1, photo2, photo4, photo6, photo7, photo8, photo10];

  return (
    <section id="charlas" className="bg-background">
      <div className="max-w-screen-xl m-auto p-5">
        <h1 className="text-4xl text-center text-secondary font-bold pb-10">
          Impulsa Tu Futuro con YMe
        </h1>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex-1">
            <div className="flex justify-center items-center flex-col h-full">
              <p className="max-w-prose text-text font-medium text-md leading-relaxed ">
                En YMe, entendemos que dar el primer paso en el mundo laboral
                puede ser un desafío. Por eso, nos dedicamos a apoyar a los
                estudiantes universitarios locales en su transición del aula al
                lugar de trabajo. Nuestra misión es capacitar a los futuros
                profesionales y hacerlos destacar en un mercado laboral
                competitivo.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <Carousel images={images} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoSection;
