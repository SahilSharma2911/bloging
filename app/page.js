import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";
import Image from "next/image";

export default function Home({ searchParams }) {
  const page = (searchParams && parseInt(searchParams.page)) || 1;

  return (
    <div>
      <Featured />
      <CategoryList />
      <div className="mx-[30px] sm:mx-[100px] flex mt-[30px] gap-6">
        <div className="w-full md:w-3/5">
          <CardList page={page} />
        </div>
        <div className="w-2/5 hidden md:flex">
          <Menu />
        </div>
      </div>
    </div>
  );
}
