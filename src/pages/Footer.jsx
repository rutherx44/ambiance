import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <section className="mt-[7.8125rem] mx-auto flex flex-col items-center gap-16 xs:mt-28 md:mt-20 xl:mt-[7.8125rem]">
        <div>
          <a href="#home">
            <img
              className="cursor-pointer w-[8.125rem] h-[1.875rem] md:w-[9.25rem] md:h-[2.125rem] lg:w-[10.375rem] lg:h-10"
              src={logo}
              alt="Ambiance Interior Design Studio Logo"
            />
          </a>
        </div>
        <ul className="w-full font-corbel flex flex-col items-center gap-10 transition-all md:flex-row xs:justify-center xl:gap-[5.625rem]">
          <li className="hover:text-[#F7941D] transition-all cursor-pointer">
            <a href="#about">ABOUT US</a>
          </li>
          <li className="hover:text-[#F7941D] transition-all cursor-pointer">
            <a href="#whatwedo">WHAT WE DO</a>
          </li>
          <li className="hover:text-[#F7941D] transition-all cursor-pointer">
            <a href="#project">PROJECTS</a>
          </li>
          <li className="hover:text-[#F7941D] transition-all cursor-pointer">
            <a href="#team">CAREERS</a>
          </li>
          <li className="hover:text-[#F7941D] transition-all cursor-pointer">
            <a href="#contact">CONTACT US</a>
          </li>
        </ul>
      </section>
      <footer className="mt-16 pb-8 text-center">
        <p className="font-corbel">©2021 Ambiance Interior Design Studio</p>
      </footer>
    </>
  );
};

export default Footer;
