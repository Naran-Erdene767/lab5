
import { Geist, Geist_Mono } from "next/font/google";
import React, { useState } from 'react';
import { useRouter } from "next/router";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [color, setColor] = useState("");
  const [showButtons, setShowButtons] = useState(true);
  const handleClear = () => {
    setColor("");
    setShowButtons(true);
  };
  const router = useRouter();

  const Back = () => {
    router.push("/");
  };

  return (
    <div className={`flex space-x-4 w-full h-screen ${color ? `bg-${color}-500` : 'bg-white'}`}>
        <button
            onClick={Back}
            className=" mt-8 ml-8 h-16 w-36 cursor-pointer bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-all mb-6">Go Back</button>
      <p className="text-black">Ungu solih</p>
      {showButtons && (
        <div className="flex space-x-4">
          <button className="border bg-purple-500 py-4 px-6 h-36 w-36" onClick={() => {
            setColor("purple");
            setShowButtons(false);
          }}>
            Purple
          </button>
          <button className="border bg-yellow-500 py-4 px-6 h-36 w-36" onClick={() => {
            setColor("yellow");
            setShowButtons(false);
          }}>
            Yellow  
          </button>
          <button className="border bg-cyan-500 py-4 px-6 h-36 w-36" onClick={() => {
            setColor("cyan");
            setShowButtons(false);
          }}>
            Cyan
          </button>
        </div>
      )}
      <button className="border bg-red-500 py-4 px-6 h-36 w-36" onClick={handleClear}>
        Clear
      </button>
      {color == "purple" ? "purple" : color == "yellow" ? "yellow" : color == "cyan" ? "cyan": "hi"}
    </div>
  );
} 
