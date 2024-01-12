import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import React from "react";

const BlogPage = ({searchParams}) => {

  const page = parseInt(searchParams.page) || 1;
  const {cat} = searchParams;

  return (
    <div className="mx-[30px] sm:mx-[100px] mt-[45px]">
        <div className="bg-red-400 text-white text-xl font-bold py-5 capitalize">
          <center>{cat} Blog</center>
        </div>
      <div className=" flex mt-[30px] gap-6">
        <div className="w-full md:w-3/5">
          <CardList page={page} cat={cat} />
        </div>
        <div className="w-2/5 hidden md:flex">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
