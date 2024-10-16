import React from "react";
import { expertise } from "../../utils/index";
import Image from "next/image";

const Expertise = () => {
  return (
    <section id="expertise" className="bg-background pb-5">
      <div className="max-w-screen-xl mx-auto p-5">
        <div>
          <h2 className="text-4xl text-secondary font-bold text-center pb-10">
            Áreas de Expertise
          </h2>
        </div>
        <div>
          <div className="gridb">
            {expertise.map((area) => (
              <div key={area.id} className="flex flex-col items-center">
                <h2 className="text-text font-medium">{area.title}</h2>
                <Image src={area.img} alt="svg image" className="w-12 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
