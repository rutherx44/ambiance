import React from "react";
import phone_base from "../assets/phone_base.png";
import tablet_base from "../assets/tablet_base.png";
import desktop_base from "../assets/desktop_base.png";
import { Button } from "../components/Button";

const Hero = () => {
  return (
    <>
      <div id="about">
        <div className="xs:hidden mx-auto">
          <img
            className="w-full sm:hidden"
            src={phone_base}
            alt="Hero Banner"
          />
          <img
            className="w-full hidden sm:flex lg:hidden"
            src={tablet_base}
            alt="Hero Banner"
          />
          <img
            className="w-full hidden lg:flex"
            src={desktop_base}
            alt="Hero Banner"
          />
          <div className="absolute justify-center top-56 px-16 xxs:top-[17rem] xxs:px-28">
            <h1 className="font-serif text-center text-3xl tracking-wide font-medium mb-6">
              Simplified Complexity
            </h1>
            <p className="font-sans text-center text-xs mb-6">
              A raw idea is complex but by having collaboration with us, the
              experts. <br />
              it can be refined or simplified.
            </p>
            <div className="flex justify-center">
              <Button displayText="ABOUT US" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
