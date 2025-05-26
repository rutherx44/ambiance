import React from "react";
import mobile_base from "../assets/mobile_base.png";
import tablet_base from "../assets/tablet_base.png";
import desktop_base from "../assets/desktop_base.png";
import { Button } from "../components/Button";

const Hero = () => {
  return (
    <>
      <section id="about" className="relative">
        <div className="mx-auto flex justify-center">
          <img
            className="w-svw sm:hidden mt-[3.75rem] md:mt-[5.625rem]"
            src={mobile_base}
            alt="Hero Banner"
          />
          <img
            className="w-dvw hidden sm:flex lg:hidden mt-[3.75rem] md:mt-[5.625rem]"
            src={tablet_base}
            alt="Hero Banner"
          />
          <img
            className="w-lvw hidden lg:flex md:mt-[5.625rem]"
            src={desktop_base}
            alt="Hero Banner"
          />
          <div className="absolute h-full w-[20.3125rem] flex flex-col items-center justify-center gap-10 sm:w-full sm:items-start sm:px-[5.625rem] xl:px-[9.375rem]">
            <h1 className="font-alice text-center sm:text-left sm:w-full">
              Simplified Complexity
            </h1>
            <p className="font-corbel sub_header text-center sm:text-left md:text-lg">
              A raw idea is complex but by having collaboration with us, the
              experts. <br />
              it can be refined or simplified.
            </p>
            <div>
              <Button displayText="ABOUT US" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
