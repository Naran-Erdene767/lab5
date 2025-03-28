import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [click, setClick] = useState("Hi");
  const router = useRouter();
  const Back = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8">
      <button
        className="absolute h-16 w-36 top-6 left-6 cursor-pointer bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-all mb-6"
        onClick={Back}
      >
        Go Back
      </button>
      <div className="bg-white shadow-lg rounded-3xl p-8 flex flex-col items-center space-y-5 w-[350px]">
        <button
          className="font-semibold text-xl text-black bg-yellow-200 px-8 py-3 rounded-full hover:scale-105 transition-all duration-200 cursor-pointer"
          onClick={() => setClick("Bi Temujin bagshid hairtai")}
        >
          Ug hevleh
        </button>
        <button
          className="font-semibold text-xl text-black px-8 py-3 rounded-full hover:scale-105 transition-all duration-200 cursor-pointer bg-blue-500"
          onClick={() => setClick("")}
        >
          Delete
        </button>
        
        {click && (
          <p className="text-3xl font-bold text-black text-center mt-6 transition-all duration-300 transform opacity-100">
            {click}
          </p>
        )}
      </div>
    </div>
  );
}
