import React from "react";
import Link from "next/link";
import Image from "next/image";
import p1 from "../../public/p1.jpeg";

const MenuPost = ({ withImage }) => {
  return (
    <div className="gap-[20px] flex flex-col mt-[10px]">
      <Link href="/" className="flex items-center">
        {withImage && (
          <div className="mr-4">
            <Image
              src={p1}
              className="rounded-[50%] h-[60px] w-[60px] object-cover"
              alt="#"
              priority
            />
          </div>
        )}
        <div className="flex flex-col gap-[5px] w-3/4">
          <div className="bg-red-400 rounded-[10px] px-3 w-max text-white">
            <span>Travel</span>
          </div>
          <h3 className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ut.
          </h3>
          <div className="text-[14px]">
            <span className="">John Doe</span>
            <span className="text-gray-400"> - 10.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center">
        {withImage && (
          <div className="mr-4">
            <Image
              src={p1}
              className="rounded-[50%] h-[60px] w-[60px] object-cover"
              alt="#"
            />
          </div>
        )}
        <div className="flex flex-col gap-[5px] w-3/4">
          <div className="bg-red-400 rounded-[10px] px-3 w-max text-white">
            <span>Food</span>
          </div>
          <h3 className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ut.
          </h3>
          <div className="text-[14px]">
            <span className="">John Doe</span>
            <span className="text-gray-400"> - 10.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center">
        {withImage && (
          <div className="mr-4">
            <Image
              src={p1}
              className="rounded-[50%] h-[60px] w-[60px] object-cover"
              alt="#"
            />
          </div>
        )}
        <div className="flex flex-col gap-[5px] w-3/4">
          <div className="bg-red-400 rounded-[10px] px-3 w-max text-white">
            <span>Culture</span>
          </div>
          <h3 className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ut.
          </h3>
          <div className="text-[14px]">
            <span className="">John Doe</span>
            <span className="text-gray-400"> - 10.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center">
        {withImage && (
          <div className="mr-4">
            <Image
              src={p1}
              className="rounded-[50%] h-[60px] w-[60px] object-cover"
              alt="#"
            />
          </div>
        )}
        <div className="flex flex-col gap-[5px] w-3/4">
          <div className="bg-red-400 rounded-[10px] px-3 w-max text-white">
            <span>Fashion</span>
          </div>
          <h3 className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ut.
          </h3>
          <div className="text-[14px]">
            <span className="">John Doe</span>
            <span className="text-gray-400"> - 10.03.2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPost;
