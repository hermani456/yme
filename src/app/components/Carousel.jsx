"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRefs = useRef([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    // Clean up function
    return () => {
      clearInterval(timer);
    };
  }, [currentImageIndex, images]);

  useGSAP(() => {
    imageRefs.current.forEach((ref, index) => {
      gsap.to(ref, {
        autoAlpha: index === currentImageIndex ? 1 : 0,
        duration: 1,
        ease: "power2.inOut",
      });
    });
  }, [currentImageIndex]);

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-[25rem] min-h-[18.75rem]">
        {images.map((src, index) => (
          <div
            ref={(el) => (imageRefs.current[index] = el)}
            key={index}
          >
            <Image
              src={src}
              width={400}
              height={200}
              alt="carousel"
              className="absolute inset-0 object-cover rounded-md"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
