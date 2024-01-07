import Menu from "@/components/menu/Menu";
import React from "react";
import Image from "next/image";
import p1 from "../../public/p1.jpeg";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className="mx-[30px] sm:mx-[100px] mt-[40px]">
      <div className="flex items-center gap-[50px] justify-between">
        <div className="flex-1">
          <h1 className="text-2xl xl:text-3xl font-semibold mb-[50px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Blanditiis, amet voluptatibus. Aliquam illum sunt voluptate quas.
            Earum ea fuga aspernatur.
          </h1>
          <div className="flex items-center gap-[20px]">
            <div className="">
              <Image
                src={p1}
                className="rounded-[50%] h-[60px] w-[60px] object-cover"
              />
            </div>
            <div className="flex flex-col ">
              <span className="font-semibold text-xl">John Deo</span>
              <span className="text-gray-400">10.02.2024</span>
            </div>
          </div>
        </div>
        <div className=" relative">
          <Image src={p1} className="h-[320px] w-[500px] object-cover hidden lg:flex" />
        </div>
      </div>
      <div className="flex gap-[50px]">
        <div className="mt-[60px]">
          <div className="flex flex-col gap-[60px]">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              praesentium accusantium esse assumenda, nobis impedit a porro
              voluptates expedita sit vero eius saepe, ipsum ut ea harum ullam
              nihil quae?
            </p>

            <p>
              <h1 className="text-xl font-semibold mb-1">Lorem ipsum dolor sit amet.</h1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              praesentium accusantium esse assumenda, nobis impedit a porro
              voluptates expedita sit vero eius saepe, ipsum ut ea harum ullam
              nihil quae?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              praesentium accusantium esse assumenda, nobis impedit a porro
              voluptates expedita sit vero eius saepe, ipsum ut ea harum ullam
              nihil quae?
            </p>
            <Comments/>
          </div>
        </div>
        <div className="hidden lg:flex">
        <Menu />
        </div>
        
      </div>
      
    </div>
  );
};

export default SinglePage;
