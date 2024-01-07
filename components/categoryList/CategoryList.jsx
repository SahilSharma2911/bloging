import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "../../public/style.png";
import fashion from "../../public/fashion.png";
import food from "../../public/food.png";
import travel from "../../public/travel.png";
import culture from "../../public/culture.png";
import coding from "../../public/coding.png";

const CategoryList = () => {
  return (
    <div className="mx-[30px] sm:mx-[100px] ">
      <h1 className="mt-[50px] mb-5 text-3xl font-semibold">Popular Categories</h1>
      <div className="flex flex-wrap justify-between gap-[10px]">
        <Link
          href="/blog?cat=style"
          className="flex items-center w-[100%] sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-[60px] rounded-[10px] bg-[#57c4ff31] justify-center"
        >
          <Image src={style} className="rounded-[50%] h-[40px]  w-[40px]" />
          <span className="ml-2">style</span>
        </Link>
        <Link
          href="/blog"
          className="flex items-center w-[100%] sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-[60px] rounded-[10px] bg-[#da85c731] justify-center"
        >
          <Image src={fashion} className="rounded-[50%] h-[40px]  w-[40px]" />
          <span className="ml-2">style</span>
        </Link>
        <Link
          href="/blog"
          className="flex items-center w-[100%] sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-[60px] rounded-[10px] bg-[#7fb88133] justify-center"
        >
          <Image src={food} className="rounded-[50%] h-[40px]  w-[40px]" />
          <span className="ml-2">style</span>
        </Link>
        <Link
          href="/blog"
          className="flex items-center w-[100%] sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-[60px] rounded-[10px] bg-[#ff795736] justify-center"
        >
          <Image src={travel} className="rounded-[50%] h-[40px] w-[40px]" />
          <span className="ml-2">style</span>
        </Link>
        <Link
          href="/blog"
          className="flex items-center w-[100%] sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-[60px] rounded-[10px] bg-[#ffb04f45] justify-center"
        >
          <Image src={culture} className="rounded-[50%] h-[40px] w-[40px] " />
          <span className="ml-2">style</span>
        </Link>
        <Link
          href="/blog"
          className="flex items-center w-[100%] sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-[60px] rounded-[10px] bg-[#5e4fff31] justify-center"
        >
          <Image src={coding} className="rounded-[50%] h-[40px] w-[40px] " />
          <span className="ml-2">style</span>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
