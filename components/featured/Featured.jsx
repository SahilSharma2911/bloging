import React from 'react'
import Image from 'next/image'
import p1 from "../../public/p1.jpeg";


const Featured = () => {
  return (
    <div className='mx-[30px] sm:mx-[100px]'>
      <h1 className="mt-[30px] sm:mt-[40px] text-[35px] sm:text-[40px] lg:text-[55px]">
        <b>Hey, sahil dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className="flex mt-[30px] items-center gap-[60px]">
        <div className="h-[350px] hidden md:flex ">
          <Image src={p1} alt="#"  className="object-cover" priority/>
        </div>
        <div className="flex flex-col gap-[10px] sm:gap-[20px]">
          <h1 className="text-[25px] sm:text-[30px]">Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
          <p className="text-[15px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className="p-4 rounded-[5px] bg-gray-200 text-black w-max mt-2 sm:mt-0">Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
