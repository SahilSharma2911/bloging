import React from "react";
import Image from "next/image";
import Link from "next/link";
// import p1 from "../../public/p1.jpeg";

const Card = ({ key, item }) => {
  const extractTextFromHTML = (html) => {
    if (typeof document === "undefined") {
      return "";
    }

    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    return tempElement.textContent || "";
  };

  const extractedText = extractTextFromHTML(item.desc);
  return (
    <div className="flex-col lg:flex-row flex mb-[60px] lg:items-center gap-[30px] mt-[30px]">
      {item.img && (
        <div className="">
          {item.img && (
            <Image
              src={item.img}
              className="object-cover"
              width={500}
              height={500}
              alt="#"
            />
          )}
        </div>
      )}

      <div className="flex flex-col gap-[30px] md:w-4/5">
        <div className="">
          <span className="text-gray-400 ">
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className="text-red-400 font-semibold uppercase">
            {item.catSlug}
          </span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1 className="font-semibold">{item.title}</h1>
        </Link>
        <p
          className="font-light"
          dangerouslySetInnerHTML={{
            __html: extractedText ? extractedText.substring(0, 60) : "",
          }}
        />
        <Link
          href={`/posts/${item.slug}`}
          className="border-b-2 w-max border-red-300"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
