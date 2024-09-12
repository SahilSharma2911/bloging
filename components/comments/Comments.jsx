"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import p1 from "../../public/p1.jpeg";
import useSWR from "swr";
import { useSession } from "next-auth/react";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();

  const [desc, setDesc] = useState("");
  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
    setDesc("");
  };

  const { data, mutate, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  return (
    <div className="mt-[50px]">
      <h1 className="text-gray-400 text-2xl font-bold mb-[30px]">Comments</h1>
      {status === "authenticated" ? (
        <div className="flex items-center justify-between gap-[30px]">
          <textarea
            className="p-[20px] w-[100%] text-black"
            placeholder="write a commnet"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button
            className="py-[10px] px-[20px] bg-teal-500 font-bold text-white border-none rounded-[5px] cursor-pointer"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className="mt-[50px]">
        {isLoading
          ? "Loading"
          : data?.map((item) => (
              <div className="mb-[50px]" key={item._id}>
                <div className="flex gap-[20px] items-center mb-[20px]">
                  {item?.user?.image && (
                    <Image
                      src={item.user.image}
                      width={50}
                      height={50}
                      className="rounded-[50%] object-cover"
                      alt="#"
                    />
                  )}

                  <div className="flex flex-col gap ">
                    <span className="font-semibold">{item.user.name}</span>
                    <span className="text-gray-400">{item.createdAt}</span>
                  </div>
                </div>
                <p>{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
