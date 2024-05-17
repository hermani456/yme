"use client"
import React from "react";
import Image from "next/image";

const Card = ({title, img, paragraph}) => {
  return (
    <div className="text-text grid justify-start gap-10 p-8 rounded-xl shadow-xl card-shadow mx-auto bg-bluish-50 h-full">
        <Image src={img} alt="svg image" className="w-12" onContextMenu={e => e.preventDefault()} />
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="font-light">{paragraph}</p>
      </div>
      {/* <p className="text-xl"><span className="text-lg font-bold"></span>{price}</p> */}
    </div>
  );
};

export default Card;
