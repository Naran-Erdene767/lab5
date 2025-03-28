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
  {
    id: 3,
    firstn: "Anand",
    lastn: "Altankhuyag",
    school: "Nest",
    job: "student",
    status: [
      { id: 10, name: "BOBO" },
      { id: 11, name: "windows" }
    ],
    image:
      "https://a.wattpad.com/useravatar/swirlycats.256.212172.jpg"
  },
  { 
    id: 4,
    firstn: "Anduul",
    lastn: "Altankhaich",
    school: "Nest",
    job: "student",
    status: [
      { id: 10, name: "tall king" },
      { id: 11, name: "windows" }
    ],
    image:
      "https://images.stockcake.com/public/5/c/0/5c0bc3b8-c95f-42fe-be4e-460ddddb00fc_medium/volleyball-joy-jump-stockcake.jpg"
  },
  {
    id: 5,
    firstn: "Soymbo",
    lastn: "Chingunjav",
    school: "Nest",
    job: "student",
    status: [
      { id: 10, name: "Dangerous" },
      { id: 11, name: "windows" }
    ],
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/5a/9f/79/5a9f794f-1823-0096-8b1f-f5af06a5d13a/source/256x256bb.jpg"
  },
  {
    id: 6,
    firstn: "Anar",
    lastn: "Batsukh",
    school: "Nest",
    job: "student",
    status: [
      { id: 10, name: "typical emo" },
      { id: 11, name: "windows" }
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAc44HUArzcTNCHFg_TEUQoZRzLvkD9kb8_A&s"
  },
  {
    id: 7,
    firstn: "Khantushig",
    lastn: "Gankhuyag",
    school: "Nest",
    job: "student",
    status: [
      { id: 10, name: "Napeleon" },
      { id: 11, name: "windows" }
    ],
    image:
      "https://i.pinimg.com/474x/f2/4c/e0/f24ce09855f117cc3d462436f3e290db.jpg"
  },
  {
    id: 8,
    firstn: "Erkhes",
    lastn: "Sanchir",
    school: "Nest",
    job: "student",
    status: [
      { id: 10, name: "FC" },
      { id: 11, name: "windows" }
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRswb0ykVPoJ2StzrANmLK-safJYRMpGGU0iA&s"
  },
  {
    id: 9,
    firstn: "Batpurev",
    lastn: "Batmunkh",
    school: "Nest",
    job: "student",
    status: [
      { id: 10, name: "Gamer" },
      { id: 11, name: "windows" }
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEsi6gvGtO0tBPk_m-HY_w1D8jz4cYOsfSvw&s"
  },
  {
    id: 10,
    firstn: "Ayden-Anand",
    lastn: "Amarbayar",
    school: "Nest",
    job: "student",
    status: [
      { id: 10, name: "Valorant hutgaluulsn" },
      { id: 11, name: "windows" }
    ],
    image:
      "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/59319/square_thumb%402x.jpg"
  },
  {
    id: 11,
    firstn: "Chinguun",
    lastn: "Toivgoo",
    school: "Nest",
    job: "student",
    status: [
      { id: 10, name: "Good boy" },
      { id: 11, name: "windows" }
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ReO1dft8tKZ56AslRXgokxIgEPtBKtPLFg&s"
  },
  {
    id: 12,
    firstn: "Khulan",
    lastn: "Sukhbat",
    school: "Nest",
    job: "student",
    status: [
      { id: 10, name: "dancer" },
      { id: 11, name: "windows" }
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJS3KwERaHrmBsNo4J1B9W9z0LQZ9eXcEXg&s"
  },
  {
    id: 13,
    firstn: "Esui",
    lastn: "???????",
    school: "Nest",
    job: "student",
    status: [
      { id: 10, name: "bad grirl" },
      { id: 11, name: "mac" }
    ],
    image:
      "https://cdn-icons-png.freepik.com/256/15739/15739955.png"
  },
  {
    id: 14,
    firstn: "Minori",
    lastn: "Nguyen",
    school: "Nest",
    job: "student",
    status: [
      { id: 10, name: "english" },
      { id: 11, name: "mac" }
    ],
    image:
      "https://cdn.iconscout.com/icon/premium/png-256-thumb/woman-speaking-5426919-4531586.png?f=webp&w=256"
  },
  {
    id: 15,
    firstn: "Serjmyadag",
    lastn: "??????",
    school: "Nest",
    job: "student",
    status: [
      { id: 10, name: "Dirol" },
      { id: 11, name: "mac" }
    ],
    image:
      "https://d28ku8nzmkcjr6.cloudfront.net/cache/92/e3/92e3e176fc455fda31e1a94ba21b2e7e.webp"
  },
  {
    id: 16,
    firstn: "Gunsan-Yanjin",
    lastn: "Tsengel",
    school: "Nest",
    job: "student",
    status: [
      { id: 10, name: "hat" },
      { id: 11, name: "mac" }
    ],
    image:
      "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9d0c2ed2-2970-44ca-b7a3-b5670e0c7167_256x256.png"
  },
  {
    id: 17,
    firstn: "Tsolmon",
    lastn: "??????",
    school: "Nest",
    job: "student",
    status: [
      { id: 10, name: "IDK" },
      { id: 11, name: "mac" }
    ],
    image:
      "https://styles.redditmedia.com/t5_33g1z/styles/communityIcon_qcsepe3r28y71.png"
  },
  {
    id: 18,
    firstn: "Azzya",
    lastn: "??????",
    school: "Nest",
    job: "student",
    status: [
      { id: 10, name: "Math" },
      { id: 11, name: "mac" }
    ],
    image:
      "https://images.stockcake.com/public/5/c/1/5c1ce1da-4e65-4493-855e-83b587859c12_medium/studious-young-learner-stockcake.jpg"
  },
  {
    id: 19,
    firstn: "Oyunbilig",
    lastn: "??????",
    school: "Nest",
    job: "student",
    status: [
      { id: 10, name: "Clock" },
      { id: 11, name: "mac" }
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX38bkiKw51IbDoo2ONt6NKLLqiy0mqBLMsg&s"
  },
  {
    id: 20,
    firstn: "Telmuun",
    lastn: "Tserenbaljir",
    school: "Nest",
    job: "student",
    status: [
      { id: 10, name: "backpack" },
      { id: 11, name: "mac" }
    ],
    image:
      "https://i.pinimg.com/474x/df/f0/5e/dff05e59037e94e5f8556a23a278e41c.jpg"
  },
];


export default function Lab5() {
  const [isColumn, setIsColumn] = useState(false);
  const [filter, setFilter] = useState("");
  const [grid, setGrid] = useState(false);
  const router = useRouter();

  const Click = () => {
    setGrid(!grid);
  };
  const Back = () => {
    router.push("/");
  };

  const filteredData = exampleData.filter((element) => {
    return filter.toLocaleLowerCase() === ""
      ? element
      : element.firstn.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
  });

  return (
    <div className="p-10 bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 h-max">
      <button
        onClick={Back}
        className="h-16 w-36 cursor-pointer bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-all mb-6"
      >
        Go Back
      </button>
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-center">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search by Firstname"
          className="p-4 rounded-lg w-full sm:w-96 bg-white text-black placeholder-gray-500 border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        />
        <button
          className="mt-4 sm:mt-0 sm:ml-4 h-12 w-48 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-xl text-white font-semibold hover:bg-indigo-600 shadow-lg transition-all"
          onClick={Click}
        >
          Toggle Layout
        </button>
      </div>
      <div
        className={
          grid
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8"
            : "flex flex-col mt-8"
        }
      >
        {filteredData.length === 0 ? (
          <p className="text-white text-xl mt-4">No match</p>
        ) : (
          filteredData.map((element) => (
            <div
              key={element.id}
              className={`${
                grid
                  ? "w-full mt-4"
                  : "w-full sm:w-[400px] md:w-[800px] mt-8 flex justify-center items-start object-cover "
              } h-auto flex flex-col p-5 rounded-lg bg-white text-black shadow-lg border-4 border-indigo-400 hover:bg-gradient-to-r from-indigo-300 to-purple-300 hover:scale-105 transition-all`}
            >
              <div
                className={`${
                  grid ? "flex-col" : "sm:flex-row"
                } flex items-center justify-start w-full mb-4`}
              >
                <img
                  src={element.image}
                  alt={`${element.firstn} ${element.lastn}`}
                  className="object-cover rounded-full w-32 h-32 mx-auto sm:mx-0 sm:mr-6 mb-4 sm:mb-0"
                />
                <div className="flex flex-col">
                <div className="text-black text-center sm:text-left mt-4 flex flex-col">
                  <p className="text-xl font-semibold">
                    {element.firstn} {element.lastn}
                  </p>
                  <p className="text-green-500 text-md">
                    {element.school} - {element.job}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className={`${
                        grid ? "text-sm text-center text-bold text-blue-500" : "text-bold text-blue-500 text-sm text-center sm:text-left ml-24"
                      }`}>
                  Status:
                </p>
                <ul className="text-black">
                  {element.status.map((item) => (
                    <li
                      key={item.id}
                      className={`${
                        grid ? "text-sm text-center ml-0" : "text-sm text-center sm:text-left ml-24"
                      }`}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
);
}
