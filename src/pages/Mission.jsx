import React from "react";
import mobile_square from "../assets/mobile_square.svg";
import tablet_square from "../assets/tablet_square.svg";
import desktop_square from "../assets/desktop_square.svg";

const Mission = () => {
  return (
    <>
      <section className="relative">
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
        <div className="absolute top-0 w-full h-full flex items-center justify-center px-[1rem]">
          <h3 className="font-alice w-[20.375rem] text-center sm:w-full sm:px-[5.625rem] xl:px-[9.375rem]">
            We at Ambiance Interior Design have been passionate about creating
            spaces reflecting the individuality of our client. Imagination and
            knowledge are the core values that drive us. We strive to push our
            imagination for a fresh look injected with design savvy and an eye
            for detail in the modern and eclectic styles we predominantly design
            in.
          </h3>
        </div>
      </section>
    </>
  );
};

export default Mission;
