import React from 'react'
import "./globals.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";



const page = () => {
  return (
  <div className="flex flex-col items-center justify-center w-full min-h-screen p-8 bg-white">
    <div className="text-center">
      <p className="text-sm font-semibold text-pink-600">WHY CHOOSE US</p>
      <h1 className="mt-2 text-3xl font-bold text-gray-900">We Different From Others</h1>
      <p className="mt-4 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
    </div>
    <div className="flex flex-col items-center justify-center mt-12 md:flex-row ">
      <div className="flex items-center justify-center w-64 h-64 bg-pink-600 rounded-full">
        <div className=" bg-white rounded-full" />
        <div className=" bg-white rounded-full" />
        <div className=" bg-white rounded-full" />
        <div className=" bg-white rounded-full" />
        <div className="relative z-10 p-8 text-white">
          <h2 className="text-xl font-bold">Industry Experts</h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          </p>
        </div>
      </div>
      <div className="relative flex items-center justify-center w-64 h-64 mt-8 rounded-full md:mt-0">
        <img src="/girlimg.webp" alt="Person working on laptop" className="object-cover w-full h-full rounded-full" />
      </div>
      <div className="flex flex-col items-start justify-center mt-8 space-y-4 md:mt-0 ml-5">
        <button className="w-full text-white bg-pink-600  rounded-full p-2 flex justify-center text-center items-center"><MdOutlineKeyboardArrowLeft /><span className='pl-28'>Industry Experts</span></button>
        <button className="w-full text-gray-900 bg-gray-200 rounded-full p-2  flex justify-center text-center items-center "><MdOutlineKeyboardArrowLeft /><span className='pl-28'>Dedicated Team</span></button>
        <button className="w-full text-gray-900 bg-gray-200 rounded-full p-2  flex justify-center text-center items-center "><MdOutlineKeyboardArrowLeft /><span className='pl-28'>Outcome Focused</span></button>
        <button className="w-full text-gray-900 bg-gray-200 rounded-full p-2  flex justify-center text-center items-center "><MdOutlineKeyboardArrowLeft /><span className='pl-28'>High Quality Service</span></button>
        <button className="w-full text-gray-900 bg-gray-200 rounded-full p-2 flex justify-center text-center items-center "><MdOutlineKeyboardArrowLeft /><span className='pl-28'>Cyber Security Expert</span></button>
      </div>
    </div>
  </div>
  )
}

export default page