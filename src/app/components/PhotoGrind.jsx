import img1 from "../../../public/assets/img/land/1.jpg";
import img2 from "../../../public/assets/img/land/2.jpg";
import img3 from "../../../public/assets/img/land/3.jpg";
import img4 from "../../../public/assets/img/land/4.jpg";
import img5 from "../../../public/assets/img/land/5.jpg";
import img6 from "../../../public/assets/img/land/6.jpg";
import Image from "next/image";

import React from "react";

const images = [img1, img2, img3, img4, img5, img6];

const PhotoGrind = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
      <div className="grid gap-4">
        {images.slice(0, 3).map((img, index) => (
            <div key={index}>
                <Image src={img} alt="foto" className="h-auto max-w-full rounded-lg" />
            </div>
        ))}
      </div>
      <div className="grid gap-4">
        {images.slice(3, 6).map((img, index) => (
            <div key={index}>
                <Image src={img} alt="foto" className="h-auto max-w-full rounded-lg" />
            </div>
        ))}
      </div>
      <div className="grid gap-4">
        {images.slice(0, 3).map((img, index) => (
            <div key={index}>
                <Image src={img} alt="foto" className="h-auto max-w-full rounded-lg" />
            </div>
        ))}
      </div>
      {/* <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
            alt=""
          />
        </div>
      </div> */}
    </div>
  );
};

export default PhotoGrind;
