import React from "react";
import Image from "next/image";
import Link from "next/link";
import p1 from "../../public/p1.jpeg";

const Card = () => {
  return (
    <div className="flex mb-[60px] items-center gap-[30px] mt-[30px]">
      <div className="hidden lg:flex">
        <Image src={p1} className="h-[320px] w-[400px] object-cover" />
      </div>
      <div className="flex flex-col gap-[30px] md:w-4/5">
        <div className="">
          <span className="text-gray-400 ">11.02.2024 - </span>
          <span className="text-red-400 font-semibold">CULTURE</span>
        </div>
        <Link href="/">
          <h1 className="font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            optio ab neque. Quibusdam, omnis.
          </h1>
        </Link>
        <p className=" font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          autem natus eius in! Ipsum ad distinctio dolor nisi officia tempore
          fugit, voluptatem maxime magnam exercitationem.
        </p>
        <Link href="/" className="border-b-2 w-max border-red-300">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
