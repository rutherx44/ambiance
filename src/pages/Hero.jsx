import React from "react";
import phone_base from "../assets/phone_base.png";
import tablet_base from "../assets/tablet_base.png";
import desktop_base from "../assets/desktop_base.png";
import { Button } from "../components/Button";

const Hero = () => {
  return (
    <>
      <section id="about">
        <div className="mx-auto flex justify-center">
          <img
            className="w-svw sm:hidden mt-[60px] md:mt-[90px]"
            src={phone_base}
            alt="Hero Banner"
          />
          <img
            className="w-dvw hidden sm:flex lg:hidden"
            src={tablet_base}
            alt="Hero Banner"
          />
          <img
            className="w-lvw hidden lg:flex"
            src={desktop_base}
            alt="Hero Banner"
          />
          <div className="absolute mt-[60px] md:mt-[90px] w-[325px] flex flex-col items-center justify-center gap-10 sm:w-full sm:items-start sm:px-[30px] sm:gap-[40px] xl:px-[150px]">
            <h1 className="font-alice hero_header mt-[104px] xs:mt-52 sm:mt-[104px] md:mt-[156px] lg:mt-[104px] xl:mt-[156px] 2xl:mt-[208px]">
              Simplified Complexity
            </h1>
            <p className="font-corbel text-base text-center md:text-lg sm:text-left">
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
