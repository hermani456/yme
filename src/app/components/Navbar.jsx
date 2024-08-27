import { Sheet, SheetTrigger, SheetContent, SheetClose } from "./ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";
import { navItems } from "@/utils";
import logo from "../../../public/assets/svg/logo.png";
import Image from "next/image";

export default function Component() {
  return (
    <div className="bg-text">
      <div className="max-w-screen-xl mx-auto">
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
              <Image src={logo} alt="logo" width={100} height={100} />
            </div>
            <nav className="hidden lg:flex justify-center items-center ml-auto">
              <div className="flex gap-6">
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
            <div className="flex lg:hidden ml-auto">
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

function ParkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 252.094 252.094"
    >
      <g>
        <path
          d="M196.979,146.785c-1.091,0-2.214,0.157-3.338,0.467l-4.228,1.165l-6.229-15.173c-3.492-8.506-13.814-15.426-23.01-15.426
		H91.808c-9.195,0-19.518,6.921-23.009,15.427l-6.218,15.145l-4.127-1.137c-1.124-0.31-2.247-0.467-3.338-0.467
		c-5.485,0-9.467,3.935-9.467,9.356c0,5.352,3.906,9.858,9.2,11.211c-2.903,8.017-5.159,20.034-5.159,27.929v32.287
		c0,6.893,5.607,12.5,12.5,12.5h4.583c6.893,0,12.5-5.607,12.5-12.5v-6.04h93.435v6.04c0,6.893,5.607,12.5,12.5,12.5h4.585
		c6.893,0,12.5-5.607,12.5-12.5v-32.287c0-7.887-2.252-19.888-5.15-27.905c5.346-1.32,9.303-5.85,9.303-11.235
		C206.445,150.72,202.464,146.785,196.979,146.785z M70.352,159.384l10.161-24.754c2.089-5.088,8.298-9.251,13.798-9.251h63.363
		c5.5,0,11.709,4.163,13.798,9.251l10.161,24.754c2.089,5.088-0.702,9.251-6.202,9.251H76.554
		C71.054,168.635,68.263,164.472,70.352,159.384z M97.292,199.635c0,2.75-2.25,5-5,5H71.554c-2.75,0-5-2.25-5-5v-8.271
		c0-2.75,2.25-5,5-5h20.738c2.75,0,5,2.25,5,5V199.635z M185.203,199.635c0,2.75-2.25,5-5,5h-20.736c-2.75,0-5-2.25-5-5v-8.271
		c0-2.75,2.25-5,5-5h20.736c2.75,0,5,2.25,5,5V199.635z"
        />
        <path
          d="M246.545,71.538L131.625,4.175c-1.525-0.894-3.506-1.386-5.578-1.386c-2.072,0-4.053,0.492-5.578,1.386L5.549,71.538
		C2.386,73.392,0,77.556,0,81.223v160.582c0,4.135,3.364,7.5,7.5,7.5h12.912c4.136,0,7.5-3.365,7.5-7.5V105.917
		c0-1.378,1.121-2.5,2.5-2.5h191.268c1.379,0,2.5,1.122,2.5,2.5v135.888c0,4.135,3.364,7.5,7.5,7.5h12.913
		c4.136,0,7.5-3.365,7.5-7.5V81.223C252.094,77.556,249.708,73.392,246.545,71.538z"
        />
      </g>
    </svg>
  );
}
