"use client";
import React from "react";
import Image from "next/image";

const Card = ({ title, img, paragraph }) => {
  return (
    <div className="text-text grid justify-start gap-10 p-8 rounded-xl shadow-xl card-shadow mx-auto bg-bluish-50 min-h-28 w-[23rem]">
      <Image
        src={img}
        alt="svg image"
        className="w-12"
        onContextMenu={(e) => e.preventDefault()}
      />
      <div>
        <h2 className="text-2xl font-bold pb-2">{title}</h2>
        <p className="max-w-prose text-text font-medium text-md leading-relaxed ">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Card;
