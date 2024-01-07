"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {
  const { data, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div className="">Loading...</div>;
  }
  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="mx-[30px] sm:mx-[100px] flex items-center justify-center mt-[60px]">
      <div className="px-[22px] sm:px-[50px] md:px-[80px] py-[100px] sm:py-[120px] flex flex-col gap-[50px] rounded-[10px] bg-gray-400 sm:w-[90%] md:w-[80%] xl:w-[60%] 2xl:w-[40%] mx-auto">
        <div
          className="p-[20px] text-white font-bold cursor-pointer flex items-center justify-center border-none rounded-[5px] bg-[#ff5555] "
          onClick={() => signIn("google")}
        >
          Sign in with Google
        </div>
        <div className="p-[20px] text-white font-bold cursor-pointer flex items-center justify-center border-none rounded-[5px] bg-[#111] ">
          Sign in with Github
        </div>
        <div className="p-[20px] text-white font-bold cursor-pointer flex items-center justify-center border-none rounded-[5px] bg-[#087bea] ">
          Sign in with Facebook
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
