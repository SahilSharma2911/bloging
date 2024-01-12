import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-[50px] mx-[30px] sm:mx-[100px] flex-col md:flex-row flex justify-between gap-[20px] sm:gap[50px] py-8">
      <div className="flex flex-col gap-[14px] flex-1">
        <div className="flex items-center gap-[10px]">
          <Image src="/logo.png" alt="#" width={50} height={50} />
          <h1 className="text-xl font-bold">bloging</h1>
        </div>
        <p className="font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p>
        <div className="mt-[10px] flex gap-[10px]">
          <Image src="/facebook.png" alt="#" width={18} height={18} />
          <Image src="/instagram.png" alt="#" width={18} height={18} />
          <Image src="/youtube.png" alt="#" width={18} height={18} />
        </div>
      </div>
      <div className="flex  flex-1 gap-[10px] sm:gap-[50px] w-[100%] md:w-0 lg:gap-[100px] justify-between md:justify-center ml-0 md:ml-5 ">
        <div className="flex flex-col gap-[10px] font-normal ">
          <span className="font-bold">Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className="flex flex-col gap-[10px] font-normal">
          <span className="font-bold">Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className="flex flex-col gap-[10px] font-normal">
          <span className="font-bold">Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
