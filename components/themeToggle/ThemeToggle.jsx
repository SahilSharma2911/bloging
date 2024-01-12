"use client";
import React from 'react'
import Image from 'next/image'
import moon from "../../public/moon.png";
import sun from "../../public/sun.png";
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const ThemeToggle = () => {

  const { toggle, theme } = useContext(ThemeContext);
  const containerClasses = theme === "white" ? "bg-black " : "bg-white";
  const containerClasses2 = theme === "white" ? "bg-white right-1 " : "bg-black";

  return (
    <div className={`w-[40px] h-[20px] rounded-[50px] flex relative p-[3px] mx-4 ${containerClasses}`} onClick={toggle}>
      <Image src={moon} className='' alt="'#" width={40} height={40}/>
      <div className={`w-[15px] h-[14px] rounded-[50%] absolute ${containerClasses2}`}></div>
      <Image src={sun} className='' alt="'#" width={40} height={40}/>
    </div>
  )
}

export default ThemeToggle
