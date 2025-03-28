import { Geist, Geist_Mono } from "next/font/google";
import React, { useState } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();

  const Go1 = () => {
    router.push("/colorlab-1");
  };
  const Go2 = () => {
    router.push("/namelab-2");
  };
  const Go3 = () => {
    router.push("/lab4");
  };
  const Go4 = () => {
    router.push("/lab-5");
  };
  const Go5 = () => {
    router.push("/lab1");
  }

  return (
    <div className="flex flex-wrap flex-col items-center justify-center gap-6 p-8 h-screen bg-[url('https://www.simplilearn.com/ice9/free_resources_article_thumb/IT_Engineer_Salary_How_Much_Can_You_Earn_in_this_Lucrative_Career.jpg')] bg-cover bg-center">
      <Image
        className="border-2 border-dashed border-white rounded-full"
        src="/download.png"
        width={250}
        height={250}
        alt="Picture of the author"
      />
      <div className="text-2xl text-white mt-12">11c Class G.Naran-Erdene</div>
      <div className="flex flex-row mt-12">
        <button onClick={Go5} className="w-40 h-12 cursor-pointer bg-blue-500 text-white font-semibold rounded-lg shadow-lg transform transition-all hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Ug hevleh
        </button>
        <button onClick={Go1} className="w-40 h-12 ml-12 cursor-pointer bg-blue-500 text-white font-semibold rounded-lg shadow-lg transform transition-all hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Color Change
        </button>
        <button onClick={Go2} className="w-40 h-12 ml-12 cursor-pointer bg-blue-500 text-white font-semibold rounded-lg shadow-lg transform transition-all hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Name
        </button>
        <button onClick={Go3} className="w-40 h-12 ml-12 cursor-pointer bg-blue-500 text-white font-semibold rounded-lg shadow-lg transform transition-all hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Json Data
        </button>
        <button onClick={Go4} className="w-40 h-12 ml-12 cursor-pointer bg-blue-500 text-white font-semibold rounded-lg shadow-lg transform transition-all hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Last Project
        </button>
      </div>
    </div>
  );
}
