import React from "react";
import mobile_square from "../assets/mobile_square.svg";
import tablet_square from "../assets/tablet_square.svg";
import desktop_square from "../assets/desktop_square.svg";

const Mission = () => {
  return (
    <>
      <section className="container_position relative">
        <img
          className="w-svw sm:hidden"
          src={mobile_square}
          alt="Square Small Screen Background"
        />
        <img
          className="w-dvw hidden sm:flex lg:hidden"
          src={tablet_square}
          alt="Square Big Screen Background"
        />
        <img
          className="w-lvw hidden lg:flex"
          src={desktop_square}
          alt="Square Big Screen Background"
        />
        <div className="absolute top-0 h-full container_position">
          <p className="hero_header">
            We at Ambiance Interior Design have been passionate about creating
            spaces reflecting the individuality of our client. Imagination and
            knowledge are the core values that drive us. We strive to push our
            imagination for a fresh look injected with design savvy and an eye
            for detail in the modern and eclectic styles we predominantly design
            in.
          </p>
        </div>
      </section>
    </>
  );
};

export default Mission;
