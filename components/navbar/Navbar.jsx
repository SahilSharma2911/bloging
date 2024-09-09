"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import fb from "../../public/facebook.png";
import ig from "../../public/instagram.png";
import yt from "../../public/youtube.png";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const Navbar = () => {
  const { toggle, theme } = useContext(ThemeContext);
  const containerClasses =
    theme === "white" ? "bg-white text-black" : "bg-black text-white";

  const [menuVisible, setMenuVisible] = useState(false);
  const closeMenu = () => {
    setMenuVisible(false);
    document.body.style.overflow = "auto";
  };

  const toggleMenu = () => {
    setMenuVisible((prevMenuVisible) => !prevMenuVisible);
    if (!menuVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <div className="flex mx-auto justify-between sm:justify-around h-[60px] items-center px-5">
        <div className="hidden md:flex px-5 gap-3">
          <Image src={fb} className="h-6 w-6" alt="'#" />
          <Image src={ig} className="h-6 w-6" alt="'#" />
          <Image src={yt} className="h-6 w-6" alt="'#" />
        </div>
        <div className="text-2xl md:text-3xl font-bold px-5 ">bloging</div>
        <div className="px-5 hidden sm:flex font-semibold">
          <ThemeToggle />
          <Link href="/" className="mx-2">
            Homepage
          </Link>
          <Link href="/" className="mx-2">
            Contact
          </Link>
          <Link href="/" className="mx-2">
            About
          </Link>
          <div className="mx-2">
            <AuthLinks />
          </div>
        </div>
        <div className="flex sm:hidden">
          <ThemeToggle />
          <MenuIcon onClick={toggleMenu} className="" />
        </div>
      </div>
      {menuVisible && (
        <div
          className={`fixed left-0 h-screen w-screen  transition-transform transform translate-x-0 pt-[45px] z-40  ${containerClasses}`}
        >
          <div className="flex flex-col justify-center gap-[60px] text-2xl mt-[100px] font-semibold">
            <Link href="/" className="mx-auto" onClick={closeMenu}>
              Homepage
            </Link>
            <Link href="/" className="mx-auto" onClick={closeMenu}>
              Contact
            </Link>
            <Link href="/" className="mx-auto" onClick={closeMenu}>
              About
            </Link>
            <div className="mx-auto">
              <AuthLinks closeMenu={closeMenu} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
