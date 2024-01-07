import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import React from "react";

const BlogPage = () => {
  return (
    <div className="mx-[30px] sm:mx-[100px] mt-[20px]">
        <div className="bg-red-400 text-white text-xl font-bold py-5">
          <center>Style Blog</center>
        </div>
      <div className=" flex mt-[30px] gap-6">
        <div className="w-full md:w-3/5">
          <CardList />
        </div>
        <div className="w-2/5 hidden md:flex">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
