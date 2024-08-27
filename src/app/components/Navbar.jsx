"use client";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "./ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";
import { navItems } from "@/utils";
import logo from "../../../public/assets/svg/logo.png";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Component() {
  const ref = useRef(null);
  const logoRef = useRef(null);
  const logoSmallRef = useRef(null);
  const logoContainerRef = useRef(null);
  const navLinksRef = useRef(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const tl = gsap.timeline();

    const originalPosition = {
      top: logoRef.current.offsetTop,
      left: logoRef.current.offsetLeft,
      width: logoRef.current.offsetWidth,
    };

    const originalPositionSmall = {
      top: logoSmallRef.current.offsetTop,
      left: logoSmallRef.current.offsetLeft,
    };

    gsap.set(logoSmallRef.current, {
      position: "absolute",
      top: "50%",
      left: "50%",
      x: "-50%",
      y: "-50%",
    });

    tl.to({}, { duration: 0.5 });

    tl.to(logoSmallRef.current, {
      top: originalPositionSmall.top,
      left: originalPositionSmall.left,
      x: 0,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });

    gsap.set(logoRef.current, {
      position: "absolute",
      top: "50%",
      left: "50%",
      x: "-50%",
      y: "-50%",
      width: "10rem",
    });

    tl.to({}, { duration: 0.5 });

    tl.to(logoRef.current, {
      top: originalPosition.top,
      left: originalPosition.left,
      width: originalPosition.width,
      x: 0,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });

    tl.from(
      ref.current,
      {
        height: "100vh",
        duration: 1,
        ease: "power2.inOut",
      },
      "-=0.5"
    );

    tl.from(
      navLinksRef.current,
      {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.inOut",
      },
      "-=1.5"
    );
  });

  return (
    <div className="bg-text">
      <div className="max-w-screen-xl mx-auto" ref={ref}>
        <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-text">
              <div className="grid gap-2 py-6">
                {navItems.map((link) => (
                  <SheetClose asChild key={link.id}>
                    <Link
                      href={link.path}
                      className="flex w-full items-center py-2 text-lg text-white font-semibold"
                      prefetch={false}
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex justify-start items-center w-full">
            <div className="mr-6 hidden lg:flex justify-center items-center">
              <Image
                src={logo}
                alt="logo"
                width={100}
                height={100}
                ref={logoRef}
              />
            </div>
            <nav className="hidden lg:flex justify-center items-center ml-auto">
              <div className="flex gap-6" ref={navLinksRef}>
                {navItems.map((link) => (
                  <Link
                    href={link.path}
                    className="text-white font-opens flex justify-center items-center hover:text-primary text-xl transition-colors"
                    key={link.id}
                    prefetch={false}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </nav>
            <div className="flex lg:hidden ml-auto" ref={logoSmallRef}>
              <Image src={logo} alt="logo" width={100} height={100} />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
