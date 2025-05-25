import React from "react";
import phone_base from "../assets/phone_base.png";
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
            src={phone_base}
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
          <div className="absolute h-full w-[20.3125rem] flex flex-col items-center justify-center gap-10 sm:w-full sm:items-start sm:px-[5.625rem] sm:gap-[2.5rem] xl:px-[9.375rem] container_position">
            <h1 className="font-alice header text-center mt-[6.5rem] xs:mt-52 sm:text-left sm:mt-[6.5rem] sm:w-full md:mt-[9.75rem] lg:mt-[3.25rem] xl:mt-[9.75rem] 2xl:mt-[15.625rem] 3xl:mt-[21.875rem]">
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
