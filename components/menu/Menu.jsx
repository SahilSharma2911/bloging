import React from "react";
import Link from "next/link";
import Image from "next/image";
import p1 from "../../public/p1.jpeg";
import MenuPost from "../menuPost/MenuPost";
import MenuCategory from "../menuCategory/MenuCategory";

const 
Menu = () => {
  return (
    <div className="mt-[60px] ">
      <h2 className="text-gray-400 font-medium text-[16px]">{"What's hot"}</h2>
      <h1 className="font-medium text-xl mb-[30px]">Most Popular</h1>
      <MenuPost withImage={false}/>
      <h2 className="text-gray-400 font-medium text-[16px] mt-[30px]">Discover by topic</h2>
      <h1 className="font-medium text-xl mb-[30px]">Categories</h1>
      <MenuCategory/>
      <h2 className="text-gray-400 font-medium text-[16px] mt-[40px]">Chosen by the editor</h2>
      <h1 className="font-medium text-xl  mb-[30px]">Editors Pick</h1>
      <MenuPost withImage={true}/>
    </div>
  );
};

export default Menu;
