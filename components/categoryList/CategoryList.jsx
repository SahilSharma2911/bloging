import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "../../public/style.png";
import fashion from "../../public/fashion.png";
import food from "../../public/food.png";
import travel from "../../public/travel.png";
import culture from "../../public/culture.png";
import coding from "../../public/coding.png";

const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("failed");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();

  const categoryColors = {
    style: "#57c4ff31",
    fashion: "#da85c731",
    food: "#7fb88133",
    travel: "#ff795736",
    culture: "#ffb04f45",
    coding: "#5e4fff31",
  };

  return (
    <div className="mx-[30px] sm:mx-[100px] ">
      <h1 className="mt-[50px] mb-5 text-3xl font-semibold">
        Popular Categories
      </h1>
      <div className="flex flex-wrap justify-between gap-[10px]">
        {data?.map((item) => (
          <Link
            href={`/blog?cat=${encodeURIComponent(item.slug)}`}
            className="flex items-center w-[100%] sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-[60px] rounded-[10px] justify-center"
            key={item._id}
            style={{ backgroundColor: categoryColors[item.slug] }}
          >
            {item.img && (
              <Image
                src={item.img}
                width={32}
                height={32}
                className="rounded-[50%] h-[40px]  w-[40px]"
                alt="#"
              />
            )}

            <span className="ml-2">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
