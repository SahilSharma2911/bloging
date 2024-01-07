import Link from "next/link";
import React from "react";
import Image from "next/image";
import p1 from "../../public/p1.jpeg";

const Comments = () => {
  const status = "aunthenticated";
  return (
    <div className="mt-[50px]">
      <h1 className="text-gray-400 text-2xl font-bold mb-[30px]">
        Comments
      </h1>
      {status === "aunthenticated" ? (
        <div className="flex items-center justify-between gap-[30px]">
          <textarea
            className="p-[20px] w-[100%]"
            placeholder="write a commnet"
          ></textarea>
          <button className="py-[10px] px-[20px] bg-teal-400 font-bold text-white border-none rounded-[5px] cursor-pointer">
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a commnet</Link>
      )}
      <div className="mt-[50px]">
        <div className="mb-[50px]">
          <div className="flex gap-[20px] items-center mb-[20px]">
            <Image
              src={p1}
              className="rounded-[50%] h-[60px] w-[60px] object-cover"
            />
            <div className="flex flex-col gap ">
              <span className="font-semibold">John Deo</span>
              <span className="text-gray-400">01.01.2024</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium rem exercitationem aperiam aliquam aut expedita
            doloribus maxime aliquid, suscipit nesciunt corporis magni
            voluptatem tenetur inventore?
          </p>
        </div>
        <div className="mb-[50px]">
          <div className="flex gap-[20px] items-center mb-[20px]">
            <Image
              src={p1}
              className="rounded-[50%] h-[60px] w-[60px] object-cover"
            />
            <div className="flex flex-col gap ">
              <span className="font-semibold">John Deo</span>
              <span className="text-gray-400">01.01.2024</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium rem exercitationem aperiam aliquam aut expedita
            doloribus maxime aliquid, suscipit nesciunt corporis magni
            voluptatem tenetur inventore?
          </p>
        </div>
        <div className="mb-[50px]">
          <div className="flex gap-[20px] items-center mb-[20px]">
            <Image
              src={p1}
              className="rounded-[50%] h-[60px] w-[60px] object-cover"
            />
            <div className="flex flex-col gap ">
              <span className="font-semibold">John Deo</span>
              <span className="text-gray-400">01.01.2024</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium rem exercitationem aperiam aliquam aut expedita
            doloribus maxime aliquid, suscipit nesciunt corporis magni
            voluptatem tenetur inventore?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
