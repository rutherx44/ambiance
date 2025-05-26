import React from "react";
import mobile_square from "../assets/mobile_square.svg";
import tablet_square from "../assets/tablet_square.svg";
import desktop_square from "../assets/desktop_square.svg";
import right from "../assets/right.png";
import { MoveLeft, MoveRight } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="mt-24 relative">
      <div className="w-full">
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
        <div className="w-full absolute top-0 h-full flex flex-col justify-center gap-10 md:gap-5 xl:gap-10">
          <div className="flex flex-row items-center justify-center px-[1rem] sm:px-[5.625rem] xl:px-[9.375rem]">
            <div className="button-prev-slide hidden md:flex">
              <MoveLeft className="hover:text-[#F7941D] transition-all w-8 h-8 md:w-[2.625rem] md:h-9" />
            </div>
            <div className="w-full flex flex-col items-center text-center font-alice gap-10 md:gap-5 xl:gap-10">
              <img className="w-16" src={right} alt="Right Quote" />
              <h3 className="px-4 sm:px-[5.625rem] xl:px-[9.375rem]">
                It is very satisfying when a decision we make turns out to have
                been the best one.
              </h3>
              <h3>Jane Doe</h3>
            </div>
            <div className="button-next-slide hidden md:flex">
              <MoveRight className="hover:text-[#F7941D] transition-all w-8 h-8 md:w-[2.625rem] md:h-9" />
            </div>
          </div>
          <div className="flex justify-center gap-12 mt-8 md:hidden">
            <div className="button-prev-slide">
              <MoveLeft className="hover:text-[#F7941D] transition-all w-8 h-8 md:w-[2.625rem] md:h-9" />
            </div>
            <div className="button-next-slide">
              <MoveRight className="hover:text-[#F7941D] transition-all w-8 h-8 md:w-[2.625rem] md:h-9" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
