// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.bubble.css";
// import { useContext } from "react";
// import { ThemeContext } from "@/context/ThemeContext";
// import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";
// import { app } from "../utils/firebase";

// const WritePage = () => {
//   const storage = getStorage(app);
//   const { status } = useSession();
//   const router = useRouter();
//   const { toggle, theme } = useContext(ThemeContext);
//   const containerClasses =
//     theme === "white" ? "bg-white text-black" : "bg-black text-white";

//   const [file, setFile] = useState(null);
//   const [media, setMedia] = useState("");
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState("");
//   const [title, setTitle] = useState("");
//   const [catSlug, setCatSlug] = useState("");
//   const [imagePreview, setImagePreview] = useState(null);

//   useEffect(() => {
//     const storage = getStorage(app);

//     const upload = () => {
//       const name = new Date().getTime() + file.name;
//       const storageRef = ref(storage, name);

//       const uploadTask = uploadBytesResumable(storageRef, file);

//       if (file) {
//         const reader = new FileReader();
//         reader.onloadend = () => {
//           setImagePreview(reader.result);
//         };
//         reader.readAsDataURL(file);
//       } else {
//         setImagePreview(null);
//       }

//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//           const progress =
//             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           console.log("Upload is " + progress + "% done");
//           switch (snapshot.state) {
//             case "paused":
//               console.log("Upload is paused");
//               break;
//             case "running":
//               console.log("Upload is running");
//               break;
//           }
//         },
//         (error) => {},
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//             setMedia(downloadURL);
//           });
//         }
//       );
//     };

//     file && upload();
//   }, [file]);

//   // Client-side useEffect
//   useEffect(() => {
//     if (typeof window !== "undefined" && file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     } else {
//       setImagePreview(null);
//     }
//   }, [file]);

//   if (status === "loading") {
//     return <div className="">Loading...</div>;
//   }

//   if (status === "unauthenticated") {
//     router.push("/");
//   }

//   const slugify = (str) =>
//     str
//       .toLowerCase()
//       .trim()
//       .replace(/[^\w\s-]/g, "")
//       .replace(/[\s_-]+/g, "-")
//       .replace(/^-+|-+$/g, "");

//   const handleSubmit = async () => {
//     const res = await fetch("/api/posts", {
//       method: "POST",
//       body: JSON.stringify({
//         title,
//         desc: value,
//         img: media,
//         slug: slugify(title),
//         catSlug: catSlug || "style",
//       }),
//     });
//     // Reset the form after API call
//     if (res.ok) {
//       setTitle("");
//       setValue("");
//       setCatSlug("");
//       setFile(null);
//       setMedia("");
//       setImagePreview(null);
//     }
//   };

//   return (
//     <div className="mx-[30px] sm:mx-[100px] mt-[60px] ">
//       <select
//         className={`mb-[10px] px-[10px] py-[10px] w-max outline-none text-xl ${containerClasses}`}
//         onChange={(e) => setCatSlug(e.target.value)}
//       >
//         <option className="text-lg">Style</option>
//         <option className="text-lg">Fashion</option>
//         <option className="text-lg">Food</option>
//         <option className="text-lg">Culture</option>
//         <option className="text-lg">Travel</option>
//         <option className="text-lg">Coding</option>
//       </select>
//       <div className="">
//         <input
//           type="text"
//           placeholder="Title"
//           className={`p-[20px] text-[20px] md:text-3xl border-none outline-none ${containerClasses}`}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </div>

//       <div className="flex  gap-[20px] h-[8vh] mt-[10px]">
//         <div className="">
//           <button
//             className="w-[36px] h-[36px] rounded-[50%] bg-transparent border-2  flex items-center justify-center cursor-pointer"
//             onClick={() => setOpen(!open)}
//           >
//             <Image
//               className=""
//               src="/plus.png"
//               width={16}
//               height={16}
//               alt="#"
//             />
//           </button>
//         </div>

//         {open && (
//           <div className="flex gap-[20px] ">
//             <input
//               type="file"
//               id="image"
//               onChange={(e) => setFile(e.target.files[0])}
//               style={{ display: "none" }}
//             />
//             <button className="w-[36px] h-[36px] rounded-[50%] bg-transparent border-2 flex items-center justify-center cursor-pointer border-[#1a8917]">
//               <label htmlFor="image">
//                 <Image src="/image.png" width={16} height={16} alt="#" />
//               </label>
//             </button>
//             <button className="w-[36px] h-[36px] rounded-[50%] bg-transparent border-2 flex items-center justify-center cursor-pointer border-[#1a8917]">
//               <Image src="/external.png" width={16} height={16} alt="#" />
//             </button>
//             <button className="w-[36px] h-[36px] rounded-[50%] bg-transparent border-2 flex items-center justify-center cursor-pointer border-[#1a8917]">
//               <Image src="/video.png" width={16} height={16} alt="#" />
//             </button>
//           </div>
//         )}
//       </div>
//       <div className="my-50px">
//         {imagePreview && (
//           <div className="">
//             <Image
//               className="object-cover"
//               src={imagePreview}
//               width={400}
//               height={400}
//               alt="#"
//             />
//           </div>
//         )}
//       </div>
//       <div>
//         <ReactQuill
//           className="w-[100%] "
//           theme="bubble"
//           value={value}
//           onChange={setValue}
//           placeholder="Tell your story..."
//         />
//       </div>
//       <button
//         onClick={handleSubmit}
//         className="absolute top-[65px] xl:top-[15px] right-[20px] sm:right-[45px] lg:right-[75px] xl:right-[20px] py-[5px] px-[15px] border-none bg-[#1a8917] font-semibold text-white rounded-[20px]"
//       >
//         Publish
//       </button>
//     </div>
//   );
// };

// export default WritePage;

import React from 'react'

const page = () => {
  return (
    <div>
      hii
    </div>
  )
}

export default page
