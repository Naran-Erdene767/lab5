import { Geist, Geist_Mono } from "next/font/google";
import React, { useState } from "react";
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
  const [name, setName] = useState("");
  const router = useRouter();

  const Back = () => {
    router.push("/");
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-2xl p-8 rounded-lg shadow-lg bg-white">
        <button
          onClick={Back}
          className="h-16 w-26 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-all mb-6"
        >
          Go Back
        </button>

        <div className="flex flex-col items-center">
          <label
            htmlFor="name"
            className="text-2xl font-semibold text-gray-700 mb-4"
          >
            Enter Your Name
          </label>

          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-gray-300 p-3 rounded-lg w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            placeholder="Enter your name"
          />

          <p className="mt-4 text-xl text-center text-gray-700">
            {name ? `Hi, ${name}` : "Hi, 11v Student"}
          </p>
        </div>
      </div>
    </div>
  );
}
