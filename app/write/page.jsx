"use client"
import React, { use, useState } from "react";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="mx-[30px] sm:mx-[100px]">
      <input type="text" placeholder="Title" className="p-[20px] font-[64px] border-none outline-none"/>
      <div className="flex gap-[20px] h-[700px]">
        <button className="w-[36px] h-[36px] rounded-[50%] bg-transparent border-2  flex items-center justify-center cursor-pointer" onClick={()=> setOpen(!open)}>
          <Image className="" src="/plus.png" width={16} height={16} />
        </button>
        {open && (
          <div className="flex gap-[20px] ">
            <button className="w-[36px] h-[36px] rounded-[50%] bg-transparent border-2 flex items-center justify-center cursor-pointer border-[#1a8917]">
              <Image src="/image.png"  width={16} height={16} />
            </button>
            <button className="w-[36px] h-[36px] rounded-[50%] bg-transparent border-2 flex items-center justify-center cursor-pointer border-[#1a8917]">
              <Image src="/external.png" width={16} height={16} />
            </button>
            <button className="w-[36px] h-[36px] rounded-[50%] bg-transparent border-2 flex items-center justify-center cursor-pointer border-[#1a8917]">
              <Image src="/video.png" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill className="w-[100%]" theme="bubble" value={value} onChange={setValue} placeholder="Tell your story..." />
      </div>
    </div>
  );

};

export default WritePage;
