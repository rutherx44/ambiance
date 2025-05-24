import React from "react";
import phone_base from "../assets/phone_base.png";
import tablet_base from "../assets/tablet_base.png";
import desktop_base from "../assets/desktop_base.png";
import { Button } from "../components/Button";

const Hero = () => {
  return (
    <>
      <div id="about">
        <div className="mx-auto">
          <img className="w-svw sm:hidden" src={phone_base} alt="Hero Banner" />
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
          <div className="container_position">
            <h1 className="">Simplified Complexity</h1>
            <p className="">
              A raw idea is complex but by having collaboration with us, the
              experts. <br />
              it can be refined or simplified.
            </p>
            <div className="">
              <Button displayText="ABOUT US" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
