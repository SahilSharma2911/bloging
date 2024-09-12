"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../utils/firebase";

const WritePage = () => {
  const storage = getStorage(app);
  const { status } = useSession();
  const router = useRouter();
  const { toggle, theme } = useContext(ThemeContext);
  const containerClasses =
    theme === "white" ? "bg-white text-black" : "bg-black text-white";

  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(""); // Story text
  const [title, setTitle] = useState(""); // Title text
  const [catSlug, setCatSlug] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setImagePreview(null);
      }

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style",
      }),
    });

    if (res.ok) {
      setTitle("");
      setValue("");
      setCatSlug("");
      setFile(null);
      setMedia("");
      setImagePreview(null);
    }
  };

  return (
    <div className="mx-[30px] sm:mx-[100px] mt-[60px] ">
      <select
        className={`mb-[10px] px-[10px] py-[10px] w-max outline-none text-xl ${containerClasses}`}
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="style" className="text-lg">
          Style
        </option>
        <option value="fashion" className="text-lg">
          Fashion
        </option>
        <option value="food" className="text-lg">
          Food
        </option>
        <option value="culture" className="text-lg">
          Culture
        </option>
        <option value="travel" className="text-lg">
          Travel
        </option>
        <option value="coding" className="text-lg">
          Coding
        </option>
      </select>

      <input
        type="text"
        placeholder="Title"
        value={title} 
        className={`p-[20px] text-[20px] md:text-3xl border-none outline-none ${containerClasses}`}
        onChange={(e) => setTitle(e.target.value)} 
      />

      <div className="flex  gap-[20px] h-[8vh] mt-[10px]">
        <div className="">
          <button
            className="w-[36px] h-[36px] rounded-[50%] bg-transparent border-2  flex items-center justify-center cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <Image src="/plus.png" width={16} height={16} alt="#" />
          </button>
        </div>

        {open && (
          <div className="flex gap-[20px]">
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className="w-[36px] h-[36px] rounded-[50%] bg-transparent border-2 flex items-center justify-center cursor-pointer border-[#1a8917]">
              <label htmlFor="image">
                <Image src="/image.png" width={16} height={16} alt="#" />
              </label>
            </button>
          </div>
        )}
      </div>

      {imagePreview && (
        <div className="">
          <Image
            className="object-cover"
            src={imagePreview}
            width={400}
            height={400}
            alt="#"
          />
        </div>
      )}

      <input
        type="text"
        placeholder="Tell your story..."
        value={value}
        className={`p-[20px] text-[20px] md:text-2xl border-none outline-none ${containerClasses}`}
        onChange={(e) => setValue(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="absolute top-[65px] xl:top-[15px] right-[20px] sm:right-[45px] lg:right-[75px] xl:right-[20px] py-[5px] px-[15px] border-none bg-[#1a8917] font-semibold text-white rounded-[20px]"
      >
        Publish
      </button>
    </div>
  );
};

export default WritePage;
