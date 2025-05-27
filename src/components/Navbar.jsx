import React, { useRef } from "react";
import logo from "../assets/logo.png";
import { Button } from "./Button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-125rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(125rem)";
  };

  return (
    <nav
      id="home"
      className="w-full flex fixed z-10 items-center justify-between bg-white shadow-md shadow-slate-200 h-[3.75rem] px-[1rem] md:h-[5.625rem] sm:px-[5.625rem] xl:px-[9.375rem]"
    >
      <a href="#home">
        <img
          className="cursor-pointer w-[8.125rem] h-[1.875rem] md:w-[9.25rem] md:h-[2.125rem] lg:w-[10.375rem] lg:h-10"
          src={logo}
          alt="Ambiance Interior Design Studio Logo"
        />
      </a>
      <ul className="hidden items-center gap-5 tracking-wide transition-all lg:flex lg:gap-8 xl:gap-10">
        <li className="hover:text-[#F7941D] transition-all cursor-pointer">
          <a href="#about">ABOUT</a>
        </li>
        <li className="hover:text-[#F7941D] transition-all cursor-pointer">
          <a href="#whatwedo">WHAT WE DO</a>
        </li>
        <li className="hover:text-[#F7941D] transition-all cursor-pointer">
          <a href="#project">PROJECT</a>
        </li>
        <li className="hover:text-[#F7941D] transition-all cursor-pointer">
          <a href="#team">CAREERS</a>
        </li>
        <li>
          <a href="#contact">
            <Button displayText="CONTACT US" />
          </a>
        </li>
      </ul>
      <button
        title="Menu"
        className="lg:hidden cursor-pointer"
        onClick={openMenu}
      >
        <Menu className="hover:text-[#F7941D] transition-all w-5 h-4 md:w-7 md:h-[1.375rem]" />
      </button>

      {/* Mobile Sidebar */}
      <ul
        ref={sideMenuRef}
        className="flex fixed lg:hidden items-center justify-center flex-col gap-6 font-normal tracking-wide z-10 bg-white shadow-[0_0_1.875rem] shadow-slate-200 w-3/4 h-full top-0 bottom-0 -right-500 transition-all duration-500"
      >
        <button
          title="X"
          className="lg:hidden cursor-pointer absolute top-[1.375rem] right-4 sm:right-[5.625rem] md:top-[2.125rem]"
          onClick={closeMenu}
        >
          <X className="hover:text-[#F7941D] transition-all w-5 h-4 md:w-7 md:h-[1.375rem]" />
        </button>
        <li className="hover:text-[#F7941D] transition-all cursor-pointer">
          <a href="#about" onClick={closeMenu}>
            ABOUT
          </a>
        </li>
        <li className="hover:text-[#F7941D] transition-all cursor-pointer">
          <a href="#whatwedo" onClick={closeMenu}>
            WHAT WE DO
          </a>
        </li>
        <li className="hover:text-[#F7941D] transition-all cursor-pointer">
          <a href="#project" onClick={closeMenu}>
            PROJECT
          </a>
        </li>
        <li className="hover:text-[#F7941D] transition-all cursor-pointer">
          <a href="#team" onClick={closeMenu}>
            CAREERS
          </a>
        </li>
        <li>
          <a href="#contact">
            <Button displayText="CONTACT US" buttonClick={closeMenu} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
