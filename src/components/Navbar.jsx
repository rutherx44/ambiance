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
    <nav className="w-full flex fixed z-10 items-center justify-between bg-white shadow-md shadow-slate-200 p-4 sm:py-8 sm:px-6 md:py-10 md:px-12 lg:px-20 xl:px-36">
      <a href="">
        <img
          className="h-8 cursor-pointer lg:h-10 xl:h-12"
          src={logo}
          alt="Ambiance Interior Design Studio Logo"
        />
      </a>
      <ul className="hidden items-center gap-5 text-xs font-normal tracking-wide transition-all md:flex lg:text-sm lg:gap-8 xl:text-base xl:gap-10">
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
          <a href="#carrers">CAREERS</a>
        </li>
        <li>
          <a href="#contact">
            <Button displayText="CONTACT US" />
          </a>
        </li>
      </ul>
      <button className="block md:hidden cursor-pointer" onClick={openMenu}>
        <Menu className="hover:text-[#F7941D] transition-all" />
      </button>

      {/* Mobile Sidebar */}
      <ul
        ref={sideMenuRef}
        className="flex fixed md:hidden items-center justify-center flex-col gap-6 text-xs font-normal tracking-wide z-10 bg-white shadow-[0_0_30px] shadow-slate-200 w-3/4 h-full top-0 bottom-0 -right-500 transition-all duration-500"
      >
        <button
          className="block md:hidden cursor-pointer absolute top-5 right-4 sm:top-9 sm:right-6"
          onClick={closeMenu}
        >
          <X className="hover:text-[#F7941D] transition-all" />
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
          <a href="#carrers" onClick={closeMenu}>
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
