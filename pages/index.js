import { useState } from "react";
import { useRouter } from "next/navigation";

const exampleData = [
  {
    id: 1,
    firstn: "Naran-Erdene",
    lastn: "Gankhuyag",
    school: "Nest",
    job: "student",
    status: [
      { id: 10, name: "water bottle" },
      { id: 11, name: "windows" }
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYjxDXSt0uLzdMS91Z7jP-9KPiFfszx6uHw&s"
  },
  {
    id: 2,
    firstn: "Aidaulet",
    lastn: "Nurbolsin",
    school: "Nest",
    job: "student",
    status: [
      { id: 10, name: "eyeglass" },
      { id: 11, name: "windows" }
    ],
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/68/01/e9/6801e9f9-a7aa-177c-43fa-0cb9594a5d36/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/256x256bb.jpg"
  },
  // Additional profiles...
];

export default function lab5() {
  const [filter, setFilter] = useState("");
  const [grid, setGrid] = useState(false);
  const router = useRouter();
  const Click = () => {
    setGrid(!grid);
  };

  const filteredData = exampleData.filter((element) => {
    return filter.toLocaleLowerCase() === "" 
      ? element 
      : element.firstn.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
  });

  return (
    <div className="p-10 bg-gray-200 h-max">
      <div className="mb-4">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search by Firstname"
          className="p-2 rounded-md border-2 border-gray-300 w-100 text-black"
        />
      </div>
      <button 
        className="h-12 w-96 bg-gradient-to-t from-sky-500 to-indigo-500 rounded-xl cursor-pointer mt-4 hover:scale-105 transition-all"
        onClick={Click}>
        Toggle Layout
      </button>
      <div className={grid ? "grid grid-cols-4 gap-8 mt-8" : "flex flex-col mt-8"}>
        {filteredData.length === 0 ? (
          <p className="text-black mt-4 text-xl">No matches found</p>
        ) : (
          filteredData.map((element) => (
            <div
              key={element.id}
              className="w-full sm:w-96 h-auto flex flex-col p-5 rounded-lg text-black shadow-lg border-4 border-indigo-400 mt-8 hover:bg-gradient-to-r from-indigo-300 to-purple-300 hover:scale-105 transition-all"
            >
              <img
                src={element.image}
                alt={`${element.firstn} ${element.lastn}`}
                className="object-cover rounded-full w-32 h-32 mx-auto mb-4 shadow-md"
              />
              <div className="text-black ml-2">
                <p className="text-lg font-semibold">{element.firstn} {element.lastn}</p>
              </div>
              <p className="text-green-500 text-md ml-2">{element.school} - {element.job}</p>
              {element.status && (
                <div className="mt-2 ml-2">
                  <p className="text-blue-400 font-bold">Status:</p>
                  <ul className="text-black">
                    {element.status.map((item) => (
                      <p key={item.id} className="text-sm">{item.name}</p>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
