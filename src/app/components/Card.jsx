"use client"
import React from "react";
import Image from "next/image";

const Card = ({title, img, paragraph, price, bgColor}) => {
  return (
    <div className={`text-white grid justify-start gap-10 p-8 rounded-xl shadow-xl card-shadow mx-auto ${bgColor}`}>
        <Image src={img} alt="svg image" className="w-12" onContextMenu={e => e.preventDefault()} />
      {/* <img src={img} alt="" className="w-12" onContextMenu={e => e.preventDefault()} /> */}
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="font-light">{paragraph}</p>
      </div>
      <p className="text-xl"><span className="text-lg font-bold"></span>{price}</p>
    </div>
  );
};

export default Card;
