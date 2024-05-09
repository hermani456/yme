"use client"
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: true,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=300px"
    });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div className="bg-background">
      <section className="relative flex min-h-20 md:min-h-40 overflow-hidden my-5">
        <div className="absolute">
          <div ref={slider} className="relative whitespace-nowrap">
            <p ref={firstText} className="relative m-0 text-text text-6xl md:text-[9rem] pr-3">
              Oportunidad, Confianza, Integracion -
            </p>
            <p
              ref={secondText}
              className="absolute m-0 text-text text-6xl md:text-[9rem] pr-3 left-full top-0"
            >
              Oportunidad, Confianza, Integracion -
            </p>
          </div>
        </div>
      </section>
     </div>
  );
}
