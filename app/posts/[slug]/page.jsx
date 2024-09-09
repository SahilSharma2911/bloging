import Menu from "@/components/menu/Menu";
import React from "react";
import Image from "next/image";
import p1 from "../../../public/p1.jpeg";
import Comments from "@/components/comments/Comments";

const getData = async (slug) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);
  return (
    <div className="mx-[30px] sm:mx-[100px] mt-[45px]">
      <div className="flex md:hidden">
        {data?.img && (
          <Image
            src={data.img}
            width={400}
            height={400}
            className=" object-cover"
            alt="#"
          />
        )}
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-[50px] mt-8 md:mt-0 justify-between">
        <div className="">
          <h1 className="text-2xl xl:text-3xl font-semibold mb-[50px]">
            {data?.title}
          </h1>
          <div className="flex items-center gap-[20px]">
            <div className="">
              {data?.user?.image && (
                <Image
                  src={data.user.image}
                  className="rounded-[50%]  object-cover"
                  width={55}
                  height={55}
                  alt="#"
                />
              )}
            </div>
            <div className="flex flex-col ">
              <span className="font-semibold text-xl">{data?.user.name}</span>
              <span className="text-gray-400">10.02.2024</span>
            </div>
          </div>
        </div>
        <div className="hidden md:flex">
          {data?.img && (
            <Image
              src={data.img}
              width={300}
              height={300}
              className=" object-cover"
              alt="#"
            />
          )}
        </div>
      </div>
      <div className=" flex gap-[50px]">
        <div className=" w-full md:w-3/5 mt-[60px]">
          <div
            className="flex flex-col gap-[60px]"
            dangerouslySetInnerHTML={{ __html: data?.desc || "" }}
          />

          <Comments postSlug={slug} />
        </div>
        <div className="w-2/5 hidden lg:flex">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
